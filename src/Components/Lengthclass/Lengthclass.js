import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aux from '../../hoc/aux';
import classes from './length.module.css';
import { Button } from 'react-bootstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from '../../Header/header';
const options = [
  { value: 'm', label: 'meter' },
  { value: 'mm', label: 'millimeter' },
  { value: 'km', label: 'kilometer' },
  { value: 'Um', label: 'micrometer' },
  { value: 'cm', label: 'centimeter' }
];



class length extends Component {
  state = {
    value: "",
    secondValue: null,
    selectedOption1: null,
    selectedOption2: null,
    width: '',
    height: ''


  }
  handleSubmit = () => {
    try {
      console.log('Your input value is: ' + this.state.value);
      if ((this.state.selectedOption1.label === "meter") && (this.state.selectedOption2.label === "millimeter")) {
        this.setState({ secondValue: (this.state.value * 1000) });
        console.log(this.state.secondValue);
      } else if ((this.state.selectedOption1.label === "meter") && (this.state.selectedOption2.label === "meter")) {
        this.setState({ secondValue: (this.state.value) });
      }
      else if ((this.state.selectedOption1.label === "meter") && (this.state.selectedOption2.label === "centimeter")) {
        this.setState({ secondValue: (this.state.value * 100) });
      }
      else if ((this.state.selectedOption1.label === "meter") && (this.state.selectedOption2.label === "kilometer")) {
        this.setState({ secondValue: (this.state.value / 1000) });
      }
      else if ((this.state.selectedOption1.label === "meter") && (this.state.selectedOption2.label === "micrometer")) {
        this.setState({ secondValue: ((this.state.value) * (1e+6)) });
      }
      else if ((this.state.selectedOption1.label === "millimeter") && (this.state.selectedOption2.label === "meter")) {
        this.setState({ secondValue: (this.state.value / 1000) });
      }
      else if ((this.state.selectedOption1.label === "millimeter") && (this.state.selectedOption2.label === "millimeter")) {
        this.setState({ secondValue: (this.state.value) });
      } else if ((this.state.selectedOption1.label === "millimeter") && (this.state.selectedOption2.label === "centimeter")) {
        this.setState({ secondValue: (this.state.value / 10) });
      } else if ((this.state.selectedOption1.label === "millimeter") && (this.state.selectedOption2.label === "kilometer")) {
        this.setState({ secondValue: (this.state.value / (1e+6)) });
      } else if ((this.state.selectedOption1.label === "millimeter") && (this.state.selectedOption2.label === "micrometer")) {
        this.setState({ secondValue: (this.state.value * 1000) });
      }
      else if ((this.state.selectedOption1.label === "kilometer") && (this.state.selectedOption2.label === "meter")) {
        this.setState({ secondValue: (this.state.value * 1000) });
      } else if ((this.state.selectedOption1.label === "kilometer") && (this.state.selectedOption2.label === "millimeter")) {
        this.setState({ secondValue: (this.state.value * (1e+6)) });
      } else if ((this.state.selectedOption1.label === "kilometer") && (this.state.selectedOption2.label === "centimeter")) {
        this.setState({ secondValue: (this.state.value * 100000) });
      } else if ((this.state.selectedOption1.label === "kilometer") && (this.state.selectedOption2.label === "kilometer")) {
        this.setState({ secondValue: (this.state.value) });
      } else if ((this.state.selectedOption1.label === "kilometer") && (this.state.selectedOption2.label === "micrometer")) {
        this.setState({ secondValue: (this.state.value * (1e+9)) });
      }
      else if ((this.state.selectedOption1.label === "micrometer") && (this.state.selectedOption2.label === "meter")) {
        this.setState({ secondValue: (this.state.value / (1e+6)) });
      } else if ((this.state.selectedOption1.label === "micrometer") && (this.state.selectedOption2.label === "millimeter")) {
        this.setState({ secondValue: (this.state.value / 1000) });
      } else if ((this.state.selectedOption1.label === "micrometer") && (this.state.selectedOption2.label === "centimeter")) {
        this.setState({ secondValue: (this.state.value / 1000) });
      } else if ((this.state.selectedOption1.label === "micrometer") && (this.state.selectedOption2.label === "kilometer")) {
        this.setState({ secondValue: (this.state.value / (1e+9)) });
      } else if ((this.state.selectedOption1.label === "micrometer") && (this.state.selectedOption2.label === "micrometer")) {
        this.setState({ secondValue: (this.state.value) });
      } else if ((this.state.selectedOption1.label === "centimeter") && (this.state.selectedOption2.label === "meter")) {
        this.setState({ secondValue: (this.state.value / 100) });
      } else if ((this.state.selectedOption1.label === "centimeter") && (this.state.selectedOption2.label === "millimeter")) {
        this.setState({ secondValue: (this.state.value * 10) });
      } else if ((this.state.selectedOption1.label === "centimeter") && (this.state.selectedOption2.label === "centimeter")) {
        this.setState({ secondValue: (this.state.value) });
      } else if ((this.state.selectedOption1.label === "centimeter") && (this.state.selectedOption2.label === "kilometer")) {
        this.setState({ secondValue: (this.state.value / 100000) });
      } else if ((this.state.selectedOption1.label === "centimeter") && (this.state.selectedOption2.label === "micrometer")) {
        this.setState({ secondValue: (this.state.value * 10000) });
      }

    }
    catch (e) {
      console.log(e);
      window.alert("oops...! please enter the valueand select the value");
    }

  }
  handleSubmitclear = () => {
    this.setState({ value: '', secondValue: '' })
  }
  handleChange1 = (event) => {
    this.setState({ value: event.target.value });
  }
  handleChange2 = (event) => {
    this.setState({ secondValue: event.target.secondValue });
  }

  firstUnit = selectedOption1 => {
    this.setState({ selectedOption1 });
    console.log(`Option selected1:`, selectedOption1);
  };
  secondUnit = selectedOption2 => {
    this.setState({ selectedOption2 });
    console.log(`Option selected2:`, selectedOption2);
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }


  render() {
    const { selectedOption1 } = this.state;
    const { selectedOption2 } = this.state;

    return (

      <Aux >
        <Header />
        <div>
          <Accordion >
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
                          value={this.state.value}
                          onChange={this.handleChange1}
                        />
                      </td>
                      <td>
                        <input
                          className={classes.text}
                          type="text"
                          name="name"
                          value={this.state.secondValue}
                          onChange={this.handleChange2}
                          placeholder="your result will appear here"
                          readOnly />

                      </td>

                    </tr>
                    <tr>
                      <td>
                        <div className={classes.Dropdown}>
                          <Select
                            value={selectedOption1}
                            onChange={this.firstUnit}
                            options={options}
                          />
                        </div>
                      </td>
                      <td>
                        <div className={classes.Dropdown}>
                          <Select
                            value={selectedOption2}
                            onChange={this.secondUnit}
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
                        <Button variant="outline-success" onClick={this.handleSubmit} value="submit" >SUBMIT</Button>{' '}

                      </td >
                      <td >
                        <Button variant="outline-secondary" onClick={this.handleSubmitclear} value="clear">CLEAR</Button>{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </AccordionDetails>
          </Accordion>


        </div>
      </Aux>
    );
  };
}

export default length;