import React, { useState } from "react";
import "./relive.css";
import { FaFilter, FaSearch } from "react-icons/fa";
import ReliveImg from "../assets/relive.png";
import videoimg from "../assets/videoimg.png";
import filterimg from "../assets/filterimg.png";

const Relive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos] = useState([
    {
      id: 1,
      title:
        "ALAA JAZAERI - Freaks OF Nature E3: Freaks Of Araveia - Main Stage",
      thumbnail: videoimg,
    },
  ]);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div className="relive-section">
        <div className="relive-div">
          <div className="relive-search">
            {/* Main Search Bar */}
            {!showFilters && (
              <div className="search-bar-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar"
                />
              </div>
            )}

            {/* Filter and Secondary Search Bar */}
            <div
              className="filter-responsive-bar"
              style={{
                width: showFilters ? "100%" : "24px",
                backgroundColor: showFilters ? "#000" : "transparent",
              }}
            >
              {showFilters && (
                <div className="search-bar-container1">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                  />
                </div>
              )}

              <FaFilter
                className="filter-icon"
                onClick={handleToggle}
                style={{ color: showFilters ? "#fff" : "#000" }}
              />

              {showFilters && (
                <div className="relive-filter-button">
                  <h3>Filters</h3>
                  <div className="relive-filter-episode">
                    <select>
                      <option>Episode</option>
                      <hr />
                      <option>Episode 1</option>
                      <hr />
                      <option>Episode 2</option>
                      <hr />
                      <option>Episode 3</option>
                      <hr />
                      <option>Episode 4</option>
                      <hr />
                      <option>Episode 5</option>
                      <hr />
                      <option>Episode 6</option>
                      <hr />
                    </select>
                  </div>
                  <div className="relive-filter-stage">
                    <select>
                      <option>Stage</option>
                      <hr />
                      <option>Stage 1</option>
                      <hr />
                      <option>Stage 2</option>
                      <hr />
                      <option>Stage 3</option>
                      <hr />
                      <option>Stage 4</option>
                      <hr />
                      <option>Stage 5</option>
                      <hr />
                      <option>Stage 6</option>
                      <hr />
                    </select>
                  </div>
                  <div className="relive-filter-genra">
                    <select>
                      <option>Genra</option>
                      <hr />
                      <option>Genra 1</option>
                      <hr />
                      <option>Genra 2</option>
                      <hr />
                      <option>Genra 3</option>
                      <hr />
                      <option>Genra 4</option>
                      <hr />
                      <option>Genra 5</option>
                      <hr />
                      <option>Genra 6</option>
                      <hr />
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relive-container">
            <div className="relive-filter">
              <h3>Filters</h3>
              <div className="relive-filter-div">
                <div className="relive-filter-search">
                  <div className="filter-search-bar-div">
                    <input
                      type="text"
                      placeholder="Search Artists"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="filter-search-bar"
                    />
                    <FaSearch className="filter-search-icon" />
                  </div>
                </div>

                <div className="relive-filter-button">
                  <div className="relive-filter-episode">
                    <select>
                      <option> Episode </option>
                      <option>Episode 1</option>
                      <hr />
                      <option>Episode 2</option>
                      <hr />
                      <option>Episode 3</option>
                      <hr />
                      <option>Episode 4</option>
                      <hr />
                      <option>Episode 5</option>
                      <hr />
                      <option>Episode 6</option>
                    </select>
                  </div>
                  <div className="relive-filter-stage">
                    <select>
                      <option> Stage </option>
                      <option>Stage 1</option>
                      <hr />
                      <option>Stage 2</option>
                      <hr />
                      <option>Stage 3</option>
                      <hr />
                      <option>Stage 4</option>
                      <hr />
                      <option>Stage 5</option>
                      <hr />
                      <option>Stage 6</option>
                    </select>
                  </div>
                  <div className="relive-filter-genra">
                    <select>
                      <option> Genra </option>
                      <option>Genra 1</option>
                      <hr />
                      <option>Genra 2</option>
                      <hr />
                      <option>Genra 3</option>
                      <hr />
                      <option>Genra 4</option>
                      <hr />
                      <option>Genra 5</option>
                      <hr />
                      <option>Genra 6</option>
                    </select>
                  </div>
                </div>

                <div className="relive-filter-content">
                  <h3>Filtered CONTENT</h3>
                  <div className="relive-filter-content-div">
                    <div className="filter-video-item">
                      {filteredVideos.map((video) => (
                        <div className="filter-video-item" key={video.id}>
                          <img src={filterimg} alt="Video Thumbnail" />
                          <p>{video.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="filter-video-item">
                      {filteredVideos.map((video) => (
                        <div className="filter-video-item" key={video.id}>
                          <img src={filterimg} alt="Video Thumbnail" />
                          <p>{video.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="filter-video-item">
                      {filteredVideos.map((video) => (
                        <div className="filter-video-item" key={video.id}>
                          <img src={filterimg} alt="Video Thumbnail" />
                          <p>{video.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="video-item">
                      {filteredVideos.map((video) => (
                        <div className="video-item" key={video.id}>
                          <img src={video.thumbnail} alt="Video Thumbnail" />
                          <p>{video.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relive-content">
              <iframe
                width="1220"
                height="1100"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
              ></iframe>
              <div className="relive-content-text">
                <h2>
                  ALAA JAZAERI - Freaks OF Nature E3: Freaks Of Araveia - Main
                  Stage
                </h2>
                <p>190 VIEWS</p>
              </div>
            </div>
          </div>

          <div className="relive-video-container">
            <div className="video-grid">
              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>

              <div className="video-item">
                {filteredVideos.map((video) => (
                  <div className="video-item" key={video.id}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relive;
