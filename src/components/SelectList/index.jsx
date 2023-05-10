import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import styles from "./style.module.css"


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '2px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
}));

export default function SelectList({ handleChange, value, listMenuItem = [], myValue }) {

    let styleBull = { position: "absolute", top: "10px", left: "17px", zIndex: 20 }
    let styleSelect = { padding: "0px 5px" }

    return (
        <span className={styles.selectListContainer}>

            {myValue && myValue(value, styleBull)}

            {listMenuItem[0] &&
                <FormControl variant="standard">
                    <Select sx={styleSelect} value={value} onChange={handleChange} input={<BootstrapInput />}>
                        {listMenuItem.map(({ value, element }, itemIndex) => <MenuItem key={itemIndex} value={value}>{element}</MenuItem>)}
                    </Select>
                </FormControl>
            }
        </span>
    );
}