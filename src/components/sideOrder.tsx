import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

interface SideContent {
  title: string;
  elements?: string[];
}

const sideContent: SideContent[] = [
  {
    title: "اختر المدن",
  },
  {
    title: "أقسام البناء",
    elements: ["بناء عام", "تشطيب", "ترميم", "تمديدات", "عزل"],
  },
  {
    title: "أقسام هندسية",
    elements: ["تصاميم", "رخص", "اشراف و زيارات"],
  },
  {
    title: "أقسام البناء",
    elements: ["صيانة", "عمالة و قوة عاملة", "عمالة و قوة عاملة", "صفحات و حلويات"],
  },
];

const names = [
  "المدية", "البليدة", "بومرداس", "الجزائر", "عين دفلة", "وهران", "مستغانم", "جيجل", "غرداية", "بسكرة",
];

const CustomSelect = styled(Select)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#047cd1",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#047cd1",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#047cd1",
  },
  "& .MuiMenu-paper": {
    backgroundColor: "#121A1F",
  },
  "& .Mui-selected": {
    color: "#047cd1",
  },
  "& .MuiListItem-root": {
    color: "white",
  },
  "& .Mui-selected, & .Mui-selected:hover": {
    backgroundColor: "#047cd1 !important",
    color: "white !important",
  },
}));

const CustomInputLabel = styled(InputLabel)(() => ({
  color: "white",
  "&.Mui-focused": {
    color: "#047cd1",
  },
}));

function NestedList() {
  const [selectedCity, setSelectedCity] = React.useState<string>("");
  const [openStates, setOpenStates] = React.useState<boolean[]>(new Array(sideContent.length).fill(true));
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value as string);
  };

  const handleClick = (index: number) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        sx={{
          all: "unset",
          p: "8px",
          borderRadius: "5px",
          position: "fixed",
          top: "50%",
          right: isSidebarOpen ? "62%" : "-4px",
          zIndex: 1000,
          backgroundColor: "#047cd1",
          color: "white",
          display: { xs: "inline-block", sm: "none" },
          transition: "right 0.3s ease",
        }}
      >
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Button>

      <List
        sx={{
          width: { sm: "30%", xs: isSidebarOpen ? "62%" : "0" },
          maxWidth: 360,
          bgcolor: "#121A1F",
          direction: "rtl",
          textAlign: "right",
          padding: isSidebarOpen ? "0 20px" : "15px",
          position: {xs:"fixed", sm:"unset"},
          top: 0,
          right: 0,
          bottom: 0,
          overflow: { xs: "auto", sm: "hidden" },
          transition: "width 0.3s ease, padding 0.3s ease",
          zIndex: 999,
        }}
        className="flex flex-col items-start"
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {sideContent.map((item, index) => (
          <div key={index} className="mb-2 w-full">
            <div onClick={() => handleClick(index)} className="w-full flex items-center justify-between cursor-pointer mb-4">
              <span className="text-[#047CD1] font-semibold">{item.title}</span>
              {openStates[index] ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#047CD1">
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
                </svg>
              ) : (
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#047CD1">
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
                </svg>
              )}
            </div>
            <Collapse in={openStates[index]} timeout="auto" className="w-full" >
              <List component="div" className="w-full">
                {index === 0 && (
                  <FormControl sx={{ m: 1, width: "90%" }}>
                    <CustomInputLabel id="select-city-label"> المدن </CustomInputLabel>
                    <CustomSelect
                      sx={{ color: "white" }}
                      labelId="select-city-label"
                      id="select-city"
                      value={selectedCity}
                      onChange={handleChange}
                      label=" المدن"
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </FormControl>
                )}
                {item.elements?.map((subItem, subIndex) => (
                  <div key={subIndex} className="sm:pr-[10px] pr-[3px] flex items-center">
                    <Checkbox {...label} sx={{ color: "white" }} />
                    <span className="text-white text-[14px] text-center">{subItem}</span>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </>
  );
}

export default NestedList;
