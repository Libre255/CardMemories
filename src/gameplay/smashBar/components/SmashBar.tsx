interface SmashBarProps {
  powerProcent: number;
}

const SmashBar: React.FC<SmashBarProps> = ({ powerProcent }) => {
  return (
    <div id="SmashBar" className="animate__animated animate__fadeIn">
      <div id="SmashBarPoints" style={{ width: `${powerProcent}%` }}>
        <img
          src="https://media.giphy.com/media/cl8m95jRTEDZdGHMtc/giphy.gif"
          alt="animated loading bar gif"
        />
      </div>
    </div>
  );
};

export default SmashBar;
