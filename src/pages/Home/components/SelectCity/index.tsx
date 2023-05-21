import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { useWeatherCity } from "../../../../state/weather/hooks";

const cities = ["Karachi", "Islamabad", "Quetta", "Lahore"];

export const SelectCity = () => {
  const { city, setCity } = useWeatherCity();

  return (
    <Box>
      <InputLabel>City</InputLabel>
      <Select value={city} label="City" onChange={(e) => setCity(e.target.value)}>
        {cities.map((e, i) => (
          <MenuItem key={i} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
