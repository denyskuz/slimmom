import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

import { toggleTheme } from '../../redux/services/themeSlice';

export const ToggleSwitch = () => {
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            color="warning"
            checked={theme.darkTheme}
            onChange={() => dispatch(toggleTheme())}
          />
        }
      />
    </FormGroup>
  );
};
