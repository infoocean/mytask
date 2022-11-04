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
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";

export default class Register extends Component {
  render() {
    return (
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
                  c_password: "",
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
                  const strongRegex = new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})"
                  );
                  if (!values.password) {
                    errors.password = "Required Feild **";
                  } else if (!strongRegex.test(values.password)) {
                    errors.password =
                      "Password should have at least 10 character and contain one uppercase, one lowercase one number and one special character**";
                  }

                  if (!values.c_password) {
                    errors.c_password = "Required Feild **";
                  }

                  if (values.c_password) {
                    if (values.password !== values.c_password) {
                      errors.c_password =
                        "password and confirm password are not match **";
                    }
                  }

                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  //setshowsnipper(true);
                  //console.log(values);
                  alert(JSON.stringify(values, null, 2));

                  return false;
                  try {
                    const responce = await fetch(
                      "https://mynodeherokuappproject.herokuapp.com/wybrituserregistration",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                      }
                    );
                    const res = await responce.json();
                    //console.log(res);
                    if (responce.status === 201) {
                      //setshowsnipper(false);
                      //showToastregisterSuccessMessage();
                      const redirectfn = () => {
                        Navigate("/loginpage");
                      };
                      //setshowsnipper(false);
                      setTimeout(() => {
                        redirectfn();
                      }, "2000");
                    } else {
                      //showToastEamilNumberValidation();
                      //setshowsnipper(false);
                    }
                  } catch (error) {
                    console.error(error);
                    //showToastEamilNumberValidation();
                  }
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
                    <FormControl id="password" mt={2}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        // minLength={"10"}
                        // maxLength={"10"}
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: "13px",
                          paddingBottom: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        {errors.password && touched.password && errors.password}
                      </span>
                    </FormControl>
                    <FormControl id="c_password" mt={2}>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        name="c_password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.c_password}
                        // minLength={"10"}
                        // maxLength={"10"}
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: "13px",
                          paddingBottom: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        {errors.c_password &&
                          touched.c_password &&
                          errors.c_password}
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
    );
  }
}
