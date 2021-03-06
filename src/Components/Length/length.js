import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './length.module.css';
import { Button } from 'react-bootstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const options = [
  { value: 'm', label: 'meter' },
  { value: 'mm', label: 'millimeter' },
  { value: 'km', label: 'kilometer' },
  { value: 'Um', label: 'micrometer' },
  { value: 'cm', label: 'centimeter' }
];

function Length() {

  const [value, setValue] = useState('');
  const [secondValue, setsecondValue] = useState('');
  const [selectedOption1, setselectedOption1] = useState(null);
  const [selectedOption2, setselectedOption2] = useState(null);

  const handleSubmit = () => {
    try {
      if (value === '') {

        window.alert("oops...! please enter and select the value");

      }
      if ((selectedOption1.label === "meter") && (selectedOption2.label === "millimeter")) {
        setsecondValue((value * 1000));
      } else if ((selectedOption1.label === "meter") && (selectedOption2.label === "meter")) {
        setsecondValue(value);
      }
      else if ((selectedOption1.label === "meter") && (selectedOption2.label === "centimeter")) {
        setsecondValue(value * 100);
      }
      else if ((selectedOption1.label === "meter") && (selectedOption2.label === "kilometer")) {
        setsecondValue(value / 1000);
      }
      else if ((selectedOption1.label === "meter") && (selectedOption2.label === "micrometer")) {
        setsecondValue((value) * (1e+6));
      }
      else if ((selectedOption1.label === "millimeter") && (selectedOption2.label === "meter")) {
        setsecondValue(value / 1000);
      }
      else if ((selectedOption1.label === "millimeter") && (selectedOption2.label === "millimeter")) {
        setsecondValue(value);
      } else if ((selectedOption1.label === "millimeter") && (selectedOption2.label === "centimeter")) {
        setsecondValue(value / 10);
      } else if ((selectedOption1.label === "millimeter") && (selectedOption2.label === "kilometer")) {
        setsecondValue(value / (1e+6));
      } else if ((selectedOption1.label === "millimeter") && (selectedOption2.label === "micrometer")) {
        setsecondValue(value * 1000);
      }
      else if ((selectedOption1.label === "kilometer") && (selectedOption2.label === "meter")) {
        setsecondValue(value * 1000);
      } else if ((selectedOption1.label === "kilometer") && (selectedOption2.label === "millimeter")) {
        setsecondValue(value * (1e+6));
      } else if ((selectedOption1.label === "kilometer") && (selectedOption2.label === "centimeter")) {
        setsecondValue(value * 100000);
      } else if ((selectedOption1.label === "kilometer") && (selectedOption2.label === "kilometer")) {
        setsecondValue(value);
      } else if ((selectedOption1.label === "kilometer") && (selectedOption2.label === "micrometer")) {
        setsecondValue(value * (1e+9));
      }
      else if ((selectedOption1.label === "micrometer") && (selectedOption2.label === "meter")) {
        setsecondValue(value / (1e+6));
      } else if ((selectedOption1.label === "micrometer") && (selectedOption2.label === "millimeter")) {
        setsecondValue(value / 1000);
      } else if ((selectedOption1.label === "micrometer") && (selectedOption2.label === "centimeter")) {
        setsecondValue(value / 1000);
      } else if ((selectedOption1.label === "micrometer") && (selectedOption2.label === "kilometer")) {
        setsecondValue(value / (1e+9));
      } else if ((selectedOption1.label === "micrometer") && (selectedOption2.label === "micrometer")) {
        setsecondValue(value);
      } else if ((selectedOption1.label === "centimeter") && (selectedOption2.label === "meter")) {
        setsecondValue(value / 100);
      } else if ((selectedOption1.label === "centimeter") && (selectedOption2.label === "millimeter")) {
        setsecondValue(value * 10);
      } else if ((selectedOption1.label === "centimeter") && (selectedOption2.label === "centimeter")) {
        setsecondValue(value);
      } else if ((selectedOption1.label === "centimeter") && (selectedOption2.label === "kilometer")) {
        setsecondValue(value / 100000);
      } else if ((selectedOption1.label === "centimeter") && (selectedOption2.label === "micrometer")) {
        setsecondValue(value * 10000);
      }


    }
    catch (e) {
      console.log(e);
      window.alert("oops...! please enter the valueand select the value");
    }

  }
  const handleSubmitclear = () => {
    setValue('');
    setsecondValue('');
  }
  const handleChange1 = (event) => {
    setValue(event.target.value);
  }
  const handleChange2 = (event) => {
    setsecondValue(event.target.secondValue);
  }

  const firstUnit = selectedOption1 => {
    setselectedOption1(selectedOption1);
    console.log(`Option selected1:`, selectedOption1);
  };
  const secondUnit = selectedOption2 => {
    setselectedOption2(selectedOption2);
    console.log(`Option selected2:`, selectedOption2);
  };
  return (

    <  >
      <div >
        <Accordion  >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className={classes.expansionTitle}>Length Conversion</span>
          </AccordionSummary>
          <AccordionDetails >
            <span className={classes.expansion}>
              <table className={classes.tab}>
                <tbody>
                  <tr>
                    <td>
                      <input className={classes.text}
                        type="text"
                        placeholder="Enter your value"
                        value={value}
                        onChange={handleChange1}
                      />
                    </td>
                    <td>
                      <input
                        className={classes.text}
                        type="text"
                        name="name"
                        value={secondValue}
                        onChange={handleChange2}
                        placeholder="your result will appear here"
                        readOnly />

                    </td>

                  </tr>
                  <tr>
                    <td>
                      <div className={classes.Dropdown}>
                        <Select
                          value={selectedOption1}
                          onChange={firstUnit}
                          options={options}
                        />
                      </div>
                    </td>
                    <td>
                      <div className={classes.Dropdown}>
                        <Select
                          value={selectedOption2}
                          onChange={secondUnit}
                          options={options} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className={classes.but}>
                <tbody>
                  <tr>
                    <td>
                      <Button variant="outline-success" onClick={handleSubmit} value="submit" >SUBMIT</Button>{' '}

                    </td >
                    <td >
                      <Button variant="outline-secondary" onClick={handleSubmitclear} value="clear">CLEAR</Button>{' '}
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </AccordionDetails>
        </Accordion>

      </div>

    </ >

  );

}

export default Length;