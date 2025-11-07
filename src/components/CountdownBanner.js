import React, { useState, useEffect } from 'react';
import './CountdownBanner.css';

const FESTIVAL_MONTH = 1; // February (0-indexed months)
const FESTIVAL_START_DAY = 5;
const FESTIVAL_END_DAY = 16;

const getFestivalStartTime = (year) =>
  new Date(year, FESTIVAL_MONTH, FESTIVAL_START_DAY, 0, 0, 0).getTime();

const getFestivalEndTime = (year) =>
  new Date(year, FESTIVAL_MONTH, FESTIVAL_END_DAY, 23, 59, 59).getTime();

const getInitialTargetDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentStart = getFestivalStartTime(currentYear);
  const currentEnd = getFestivalEndTime(currentYear);

  if (now.getTime() > currentEnd) {
    return getFestivalStartTime(currentYear + 1);
  }

  return currentStart;
};

function CountdownBanner() {
  const [targetDate, setTargetDate] = useState(getInitialTargetDate);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        const targetYear = new Date(targetDate).getFullYear();
        const festivalEnd = getFestivalEndTime(targetYear);

        if (now > festivalEnd) {
          setTargetDate(getFestivalStartTime(targetYear + 1));
        } else {
          setDaysLeft(0);
        }
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDaysLeft(days);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const bannerText = `${daysLeft} days until the festival`;

  return (
    <div className="countdown-banner">
      <div className="countdown-banner-track">
        <div className="countdown-banner-content">
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
        </div>
        <div className="countdown-banner-content" aria-hidden="true">
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownBanner;
