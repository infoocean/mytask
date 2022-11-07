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
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { calling_code } from "../API/countrycodes";
import { register } from "../Actions/useraction";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends Component {
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
                    countrycode: "",
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
                    // if (!values.countrycode) {
                    //   errors.countrycode = " required country code**";
                    // }
                    if (!values.number) {
                      errors.number = " number required **";
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
                    //setshowsnipper(true);
                    //console.log(values);
                    //alert(JSON.stringify(values, null, 2));
                    const reqdata = {
                      firstname: values.firstname,
                      lastname: values.lastname,
                      email: values.email,
                      number: values.number,
                      password: values.password,
                      confirmpassword: values.confirmpassword,
                    };
                    this.props.register(reqdata, (response) => {
                      //console.log(response);
                      //console.log(response.status);
                      if (response.status === 200) {
                        toast.success("Email allready registred");
                      } else if (response.status === 201) {
                        toast.success("Registration Successfull !");
                        resetForm({ values: "" });
                      }
                      if (response.status === 500) {
                        toast.success("server not responding");
                      }
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
                            <span
                              style={{
                                color: "red",
                                fontSize: "13px",
                                paddingBottom: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              {errors.lastname &&
                                touched.lastname &&
                                errors.lastname}
                            </span>
                          </FormControl>
                        </Box>
                      </HStack>
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
                        <FormControl id="country code" mt={2}>
                          <FormLabel>Country Code</FormLabel>
                          <Select>
                            {calling_code.map((item, key) => {
                              return (
                                <option value={item.code}>
                                  {item.name + " " + item.code}
                                </option>
                              );
                            })}
                          </Select>
                          <span
                            style={{
                              color: "red",
                              fontSize: "13px",
                              paddingBottom: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {errors.countrycode &&
                              touched.countrycode &&
                              errors.countrycode}
                          </span>
                        </FormControl>
                        <FormControl id="number" mt={2}>
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            type="text"
                            name="number"
                            value={values.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
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
                        </FormControl>
                      </HStack>

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
})(Register);
