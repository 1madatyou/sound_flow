import "./loader.scss"

const Loader = () => {
    return (
        <div className="loader">

            <svg  style={{ margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#90c0ae" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            </svg>

        </div>
        
    );
  }
  
export default Loader;