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
import { register, emailstore } from "../Actions/useraction";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { calling_code } from "../API/countrycodes";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      showsnipper: false,
      number: "",
      number_val: "",
      country_code: "",
    };
  }
  handleOnChange = (value, data, event, formattedValue) => {
    //console.log(data.dialCode);
    //console.log(value.slice(data.dialCode.length));
    //this.setState({ number: value });
    this.setState({ country_code: data.dialCode });
    this.setState({ number_val: value.slice(data.dialCode.length) });
  };
  render() {
    //console.log(this.state.number);
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
                    countrycode: "+91",
                    number: "",
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

                    // const numregx = new RegExp("^[6-9]");
                    // if (!this.state.number) {
                    //   errors.number = " number feild is mandatory **";
                    // }
                    // } else if (!this.state.number.match(numregx)) {
                    //   errors.number = " plese enter valid number **";
                    // }

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
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    this.setState({ showsnipper: true });
                    //setshowsnipper(true);
                    //console.log(values);
                    //alert(JSON.stringify(values, null, 2));
                    // let numberformat = values.countrycode + "-" + values.number;
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
                    };
                    //console.log(reqdata);
                    //return false;
                    this.props.register(reqdata, (response) => {
                      //console.log(response);
                      //console.log(response.status);
                      if (response.status === 200) {
                        toast.success("Email allready registred");
                        this.setState({ showsnipper: false });
                      } else if (response.status === 201) {
                        this.props.emailstore(values.email, (res) => {});
                        toast.success("Registration Successfull !");
                        this.setState({ showsnipper: false });
                        resetForm({ values: "" });
                      }
                      if (response.status === 500) {
                        this.setState({ showsnipper: false });
                        toast.success("server not responding");
                      }
                      this.setState({ showsnipper: false });
                    });
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
                    /* and other goodies */
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
                          {/* <PhoneInput
                            country={"us"}
                            value={this.state.number}
                            onChange={(number) => this.setState({ number })}
                          /> */}
                          <PhoneInput
                            country={"us"}
                            value={this.state.number}
                            onChange={this.handleOnChange}
                          />
                        </FormControl>
                        {/* <HStack>
                          <Box mt={3}>
                            <FormControl id="firstName">
                              <FormLabel>Mobile Number</FormLabel>
                              <select
                                name="countrycode"
                                value={values.countrycode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{
                                  width: "127px",
                                  height: "37px",
                                  border: "1px solid #97a99c3b",
                                }}
                              >
                                {calling_code.map((item, key) => {
                                  return (
                                    <option
                                      key={key}
                                      value={item.code}
                                      label={item.name + " " + item.code}
                                    >
                                      {item.name + " " + item.code}
                                    </option>
                                  );
                                })}
                              </select>
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl mt={3} id="lastName">
                              <FormLabel></FormLabel>
                              <Input
                                width={"100%"}
                                type="text"
                                name="number"
                                value={" " + values.countrycode + values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{
                                  marginLeft: "-3%",
                                  borderLeft: "none",
                                  paddingLeft: "0%",
                                  height: "37px",
                                  borderRadius: "unset",
                                  marginTop: "31px",
                                  width: "278px",
                                }}
                              />
                            </FormControl>
                          </Box>
                        </HStack> */}
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
                          {errors.number && touched.number && errors.number}
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
const mapDispatchToProps = (store) => {
  var registerData = store;
  return registerData;
};
export default connect(mapDispatchToProps, {
  register,
  emailstore,
})(Register);
