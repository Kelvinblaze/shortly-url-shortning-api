import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import BackgroundShortenDesktopImage from "../assets/images/bg-shorten-desktop.svg";

const Shortener = ({ onToggleResultContainerSpacing }) => {
  const BITLY_ACESS_TOKEN = import.meta.env.VITE_BITLY_ACESS_TOKEN;

  const inputRef = useRef();
  const textToCopy = useRef();
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const shortenUrl = async (longUrl, token) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          domain: "bit.ly",
          long_url: longUrl,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Get error message from Bitly
        throw new Error(errorData?.description || "Something went wrong");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      setErrors([{ label: "url", message: error.message }]);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const isValidUrl = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // optional protocol
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // optional port & path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // optional query string
        "(\\#[-a-zA-Z\\d_]*)?$", // optional fragment
      "i"
    );

    return !!pattern.test(url.trim());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]); // Clear previous errors

    // If URL is empty
    if (url.trim().length === 0) {
      setErrors([
        {
          label: "url",
          message: "Please add a link",
        },
      ]);
      return;
    }

    // If URL is not valid
    if (!isValidUrl(url)) {
      setErrors([{ label: "url", message: "Please enter a valid URL" }]);
      return;
    }

    // shortening logic
    const data = await shortenUrl(url, BITLY_ACESS_TOKEN);

    if (data) {
      setResults([data]);
    }
  };

  const copyToClipboard = async () => {
    try {
      const text = textToCopy.current.innerText;
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  useEffect(() => {
    if (url === "") {
      setResults([]);
    }
  }, [url]);

  useEffect(() => {
    if (errors.length > 0) {
      inputRef.current?.focus();
    }
  }, [errors]);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 800);

      // Cleanup to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  useEffect(() => {
    onToggleResultContainerSpacing(results.length > 0);
  }, [results, onToggleResultContainerSpacing]);

  return (
    <div className="space-y-5 w-full">
      <div
        style={{
          backgroundImage: `url("${BackgroundShortenDesktopImage}")`,
          backgroundSize: "cover",
        }}
        className="bg-primary-dark-violet lg:p-16 p-8 rounded-lg"
      >
        <div>
          {/* URL Submission Form */}
          <form onSubmit={handleSubmit}>
            <div className="md:flex justify-start md:space-x-5 space-y-5 md:space-y-0 focus:outline-primary-dark-violet">
              <div className="space-y-2 w-full">
                {/* Main Input */}
                <input
                  ref={inputRef}
                  value={url}
                  onBlur={() => {
                    setErrors([]);
                  }}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setErrors([]);
                  }}
                  className={`w-full py-3 px-5 rounded-lg outline-none border ${
                    errors.some((error) => error.label === "url")
                      ? "outline-secondary-red border-secondary-red placeholder-secondary-red"
                      : "outline-transparent focus:outline-primary-cyan"
                  }`}
                  placeholder="Shorten a link here"
                />

                {/* Error message container */}
                {errors.length > 0 && (
                  <div className="min-h-[1.25rem]">
                    {errors.some((error) => error.label === "url") && (
                      <span className="italic text-red-500 text-sm">
                        {errors.find((error) => error.label === "url")?.message}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <button
                className="primary-btn flex-none rounded-lg w-full h-max md:w-max py-3"
                type="submit"
              >
                {isLoading ? <p>Loading...</p> : <p>Shorten It!</p>}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results */}
      {results &&
        results.map((result, index) => (
          <div key={index} className="z-[999999]">
            <div className="h-max bg-white p-5 flex lg:items-center justify-between font-medium text-lg rounded-lg flex-col lg:flex-row gap-5 lg:gap-0 divide-y lg:divide-y-0">
              <div>
                <span className="">{result?.long_url}</span>
              </div>
              <div className="lg:space-x-5 flex lg:flex-row flex-col lg:items-center gap-5 lg:gap-0 pt-5 lg:pt-0">
                <span className="text-primary-cyan" ref={textToCopy}>
                  {result?.link}
                </span>
                <button
                  className={`rounded-lg ${
                    isCopied ? "primary-dark-btn" : "primary-btn"
                  }`}
                  onClick={copyToClipboard}
                >
                  {isCopied ? <span>Copied</span> : <span>Copy</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

Shortener.propTypes = {
  onToggleResultContainerSpacing: PropTypes.bool,
};

export default Shortener;
