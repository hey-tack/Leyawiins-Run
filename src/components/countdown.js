"use client"; // Required for client-side state and hooks in Next.js App Router

import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  // 1. Calculate time left using Vanilla JS Date math
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    // If the countdown is finished, return zeros
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // 2. Initialize state with the calculated time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // 3. Set up the vanilla JS interval to update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, [targetDate]);

  // 4. Helper function to pad numbers with a leading zero (e.g., 05 instead of 5)
  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div style={styles.container}>
      <div style={styles.timeBox}>
        <span style={styles.number}>{formatNumber(timeLeft.days)}</span>
        <span style={styles.label}>Days</span>
      </div>
      <div style={styles.timeBox}>
        <span style={styles.number}>{formatNumber(timeLeft.hours)}</span>
        <span style={styles.label}>Hours</span>
      </div>
      <div style={styles.timeBox}>
        <span style={styles.number}>{formatNumber(timeLeft.minutes)}</span>
        <span style={styles.label}>Minutes</span>
      </div>
      <div style={styles.timeBox}>
        <span style={styles.number}>{formatNumber(timeLeft.seconds)}</span>
        <span style={styles.label}>Seconds</span>
      </div>
    </div>
  );
}

// Basic inline styles for layout
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  timeBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "60px",
  },
  number: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  label: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    color: "#666",
  },
};