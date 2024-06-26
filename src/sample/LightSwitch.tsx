import "./sample.css";

export default function LightSwitch() {
  function handleClick(): void {
    const toggleBtnContent = document.getElementById('toggleBtnContent');
    if (toggleBtnContent) {
      let contentStyle = toggleBtnContent.style;
      if (contentStyle.backgroundColor === 'black') {
        contentStyle.backgroundColor = 'white';
      } else {
        contentStyle.backgroundColor = 'black';
      }
    }
  }

  return (
    <div className="btnContent" id="toggleBtnContent">
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    </div>
  );
}