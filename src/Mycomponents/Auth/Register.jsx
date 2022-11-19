import React, { Component } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  HStack,
  Spinner,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryDropdown,RegionDropdown } from 'react-country-region-selector';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showsnipper: false,
      number: "",
      number_val: "",
      country_code: "",
      number_error:"",
    };
  }
  handleOnChange = (value, data, event, formattedValue) => {
    //console.log(data.dialCode);
    //console.log(value.slice(data.dialCode.length));
    //this.setState({ number: value });
    this.setState({ country_code: data.dialCode });
    this.setState({ number_val: value.slice(data.dialCode.length) });
    if(this.state.number_val===''){
      this.setState({number_error:"number feild is mandatory**"});
    }else{
      this.setState({number_error:""});
    }
  };
  handleOnBlur  = (e)=>{
    if(this.state.number_val===''){
      this.setState({number_error:"number feild is mandatory**"});
    }else{
      this.setState({number_error:""});
    }
  }

  render() {
    return (
      <>
        <Flex minH={"90vh"} align={"center"} justify={"center"}>
          <Stack spacing={5} mx={"auto"} maxW={"lg"} py={5} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Create your account</Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <Formik
                  initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    number: "",
                    dob : "",
                    country:"",
                    state:""
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.firstname) {
                      errors.firstname = "Required Feild **";
                    }
                    if (!values.lastname) {
                      errors.lastname = "Required Feild **";
                    }
                    if (!values.email) {
                      errors.email = "Required Feild **";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address **";
                    }
                    if (!this.state.number_val) {
                      errors.number = " number feild is mandatory **";
                    }
                    const strongRegex = new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})"
                    );
                    if (!values.password) {
                      errors.password = "Required Feild **";
                    } else if (!strongRegex.test(values.password)) {
                      errors.password =
                        "Password should have at least 10 character and contain one uppercase, one lowercase one number and one special character**";
                    }
                    if (!values.confirmpassword) {
                      errors.confirmpassword = "Required Feild **";
                    }
                    if (values.confirmpassword) {
                      if (values.password !== values.confirmpassword) {
                        errors.confirmpassword =
                          "password and confirm password are not match **";
                      }
                    }
                    if(!values.dob){
                        errors.dob = "required feild**";
                    }

                    if(!values.country){
                      errors.country = "required feild";
                    }

                    if(!values.state){
                      errors.state = "required feild";
                    }

                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    this.setState({ showsnipper: true });
                    //console.log(values);
                    alert(JSON.stringify(values, null, 2));
                    let numberformat =
                      "+" +
                      this.state.country_code +
                      "-" +
                      this.state.number_val;
                    const reqdata = {
                      firstname: values.firstname,
                      lastname: values.lastname,
                      email: values.email,
                      number: numberformat,
                      password: values.password,
                      confirmpassword: values.confirmpassword,
                      dob:values.dob,
                      country:values.country,
                      state:values.state
                    };
                    console.log(reqdata);
                    
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" mt={2}>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              type="text"
                              name="firstname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstname}
                            />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl id="lastName" mt={2}>
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              type="text"
                              name="lastname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastname}
                            />
                          </FormControl>
                        </Box>
                      </HStack>
                      <Stack>
                        <Flex>
                          <Box>
                            <span
                              style={{
                                color: "red",
                                fontSize: "13px",
                                paddingBottom: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              {errors.firstname &&
                                touched.firstname &&
                                errors.firstname}
                            </span>
                          </Box>
                          <Spacer />
                          <Box>
                            <span
                              style={{
                                color: "red",
                                fontSize: "13px",
                                paddingBottom: "10px",
                                fontWeight: "bold",
                                paddingRight: "88px",
                              }}
                            >
                              {errors.lastname &&
                                touched.lastname &&
                                errors.lastname}
                            </span>
                          </Box>
                        </Flex>
                      </Stack>
                      <FormControl id="email" mt={2}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.email && touched.email && errors.email}
                        </span>
                      </FormControl>
                      <HStack>
                        <FormControl id="numbers" mt={2}>
                          <FormLabel>Phone Number</FormLabel>
                          <PhoneInput
                            country={"us"}
                            value={this.state.number}
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                          />
                        </FormControl>
                      </HStack>
                      <Stack>
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.number && touched.number && errors.number || this.state.number_error}
                         
                        </span>
                      </Stack>
                      <FormControl id="password" mt={2}>
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </FormControl>
                      <FormControl id="confirmpassword" mt={2}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                          type="password"
                          name="confirmpassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmpassword}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.confirmpassword &&
                            touched.confirmpassword &&
                            errors.confirmpassword}
                        </span>
                      </FormControl>
                      <FormControl id="dob" mt={2}>
                        <FormLabel>Date Of Birth</FormLabel>
                        <Input
                          type="date"
                          name="dob"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.dob}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.dob &&
                            touched.dob &&
                            errors.dob}
                        </span>
                      </FormControl>
                      <FormControl id="country" mt={2}>
                        <FormLabel>Country</FormLabel>
                        <CountryDropdown name="country"
                        defaultOptionLabel="Select a country" value={values.country}
                      onChange={(_, e) => handleChange(e)} onBlur={handleBlur}
                      style={{width:"400px", height:"44px", borderRadius:"4px", border:"0.5px solid #d0dfe3 "}} />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.country &&
                            touched.country &&
                            errors.country}
                        </span>
                      </FormControl>
                      <FormControl id="state" mt={2}>
                        <FormLabel>State</FormLabel>
                        <RegionDropdown
                         name="state"
                        defaultOptionLabel="select a state" blankOptionLabel="Select a state" country={values.country} value={values.state}
                    onChange={(_, e) => handleChange(e)} onBlur={handleBlur} 
                    style={{width:"400px", height:"44px", borderRadius:"4px", border:"0.5px solid #d0dfe3 "}}
                     />
                        <span
                          style={{
                            color: "red",
                            fontSize: "13px",
                            paddingBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {errors.state &&
                            touched.state &&
                            errors.state}
                        </span>
                      </FormControl>
                     

                  
		
                      <Stack spacing={10} mt={3}>
                        <Button
                          type="submit"
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                          disabled={isSubmitting}
                        >
                          SignUp
                          {this.state.showsnipper === true ? (
                            <Spinner
                              color="white.500"
                              size="sm"
                              style={{ marginLeft: "10px" }}
                            />
                          ) : (
                            ""
                          )}
                        </Button>
                      </Stack>
                      <Stack pt={1}>
                        <Text align={"left"}>
                          Already a user?{" "}
                          <Link to="/loginpage">
                            <Text as={"span"} color={"blue.400"}>
                              Login
                            </Text>
                          </Link>
                        </Text>
                      </Stack>
                    </form>
                  )}
                </Formik>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <ToastContainer />
      </>
    );
  }
}

export default Register;
