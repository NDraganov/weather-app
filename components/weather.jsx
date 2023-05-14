import classes from "./weather.module.css";

export default function Weather({ data }) {
  return (
    <div className={classes.content}>
      <h1>{data.name.toUpperCase()}</h1>
      <h2>Today</h2>
      <div>
        <div className={classes.general}>
          <div>
            <p className={classes.temp}>{Math.round(data.main.temp)}°C</p>
            <p className={classes.description}>{data.weather[0].description}</p>
          </div>
          <div className={classes.minmax}>
            <p className={classes.max}>H: {Math.round(data.main.temp_max)}°C</p>
            <p className={classes.min}>L: {Math.round(data.main.temp_min)}°C</p>
          </div>
        </div>
        <div className={classes.details}>
          <div>
            <p>{Math.round(data.main.feels_like)}°C</p>
            <p>FELLS LIKE</p>
          </div>
          <div>
            <p>{Math.round(data.main.humidity)}%</p>
            <p>HUMIDITY</p>
          </div>
          <div>
            <p>{Math.round(data.main.pressure)} hPa</p>
            <p>PRESSURE</p>
          </div>
          <div>
            <p>{Math.round(data.visibility / 1000)} KM</p>
            <p>VISIBILITY</p>
          </div>
          <div>
            <p>{Math.round(data.wind.speed)} KM/H</p>
            <p>WINDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
