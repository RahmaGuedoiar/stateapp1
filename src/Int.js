const interval = setInterval(() => {
    setSeconds(seconds => seconds + 1);
  }, 1000);
  return () => clearInterval(interval);
}

