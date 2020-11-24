import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Area.module.css';
import { Button } from 'react-bootstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const options = [
  { value: 'sq', label: 'Square Kilometer' },
  { value: 'sm', label: 'Square Meter' },
  { value: 'sml', label: 'Square Mile' },
  { value: 'sy', label: 'Square Yard' },
  { value: 'sf', label: 'Square Foot' },
  { value: 'si', label: 'Square Inch' },
  { value: 'h', label: 'Hectare' },
  { value: 'A', label: 'Acre' },

];

function Area() {

  const [value, setValue] = useState('');
  const [secondValue, setsecondValue] = useState('');
  const [selectedOption1, setselectedOption1] = useState(null);
  const [selectedOption2, setselectedOption2] = useState(null);

  const handleSubmit = () => {
    try {
      if (value === '') {

        window.alert("oops...! please enter and select the value");

      }
      switch (selectedOption1.label) {
        case "Square Kilometer": if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value);
        } else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value * 1e+6
          );
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 2.59);
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value * 1.196e+6);
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 1.076e+7);
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Square Inch")) {
          setsecondValue(value * 1.55e+9
          );
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value * 100);
        }
        else if ((selectedOption1.label === "Square Kilometer") && (selectedOption2.label === "Acre")) {
          setsecondValue(value * 247);
        }
          break;
        case "Square Meter": if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 1e+6);
        } else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 2.59);
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value * 1.196e+6);
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 10.764);
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Square Inch")) {
          setsecondValue(value * 1550);
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value * 10000
          );
        }
        else if ((selectedOption1.label === "Square Meter") && (selectedOption2.label === "Acre")) {
          setsecondValue(value / 4047);
        }
          break;
        case "Square Mile": if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value * 2.59);
        } else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value * 2.59e+6);
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value * 3.098e+6);
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 2.788e+7);
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Square Inch")) {
          setsecondValue((value) * (4.014e+9));
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value * 259);
        }
        else if ((selectedOption1.label === "Square Mile") && (selectedOption2.label === "Acre")) {
          setsecondValue(value * 640);
        }
          break;
        case "Square Yard": if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 1.196e+6);
        } else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value / 1.196);
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 3.098e+6);
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 9);
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Square Inch")) {
          setsecondValue((value) * (1296));
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value / 11960);
        }
        else if ((selectedOption1.label === "Square Yard") && (selectedOption2.label === "Acre")) {
          setsecondValue(value / 4840);
        }
          break;
        case "Square Inch": if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 1.55e+9);
        } else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value / 1550);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 4.014e+9);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value / 1296);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value / 144);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Square Inch")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value / 1.55e+7);
        }
        else if ((selectedOption1.label === "Square Inch") && (selectedOption2.label === "Acre")) {
          setsecondValue(value / 6.273e+6);
        }
          break;
        case "Hectare": if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 100);
        } else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value * 10000);
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value * 259);
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value * 11960);
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 107639);
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Square Inch")) {
          setsecondValue((value) * (1.55e+7));
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Hectare") && (selectedOption2.label === "Acre")) {
          setsecondValue(value * 2.471);
        }
          break;

        case "Acre": if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 247);
        } else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value * 4047);
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 640);
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value * 4840);
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value * 43560);
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Square Inch")) {
          setsecondValue((value) * (6.273e+6));
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value / 2.471);
        }
        else if ((selectedOption1.label === "Acre") && (selectedOption2.label === "Acre")) {
          setsecondValue(value);
        }
          break;
        case "Square Foot": if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Kilometer")) {
          setsecondValue(value / 1.076e+7);
        } else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Meter")) {
          setsecondValue(value / 10.764);
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Mile")) {
          setsecondValue(value / 640);
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Yard")) {
          setsecondValue(value / 2.788e+7);
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Foot")) {
          setsecondValue(value);
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Square Inch")) {
          setsecondValue((value) * (144));
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Hectare")) {
          setsecondValue(value / 107639);
        }
        else if ((selectedOption1.label === "Square Foot") && (selectedOption2.label === "Acre")) {
          setsecondValue(value / 43560);
        }
          break;
        default: break;
      }



    }
    catch (e) {
      console.log(e);
      window.alert("oops...! please enter and select the value");
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

    < >
      <div >
        <Accordion  >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className={classes.expansionTitle}>Area Conversion</span>
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

    </>

  );

}

export default Area;