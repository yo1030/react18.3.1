const reportWebVitals = () => {
    import('web-vitals').then(({ onCLS, onINP, onLCP }) => {
      onLCP(console.log);
      onCLS(console.log);
      onINP(console.log);
    });
};

export default reportWebVitals;
