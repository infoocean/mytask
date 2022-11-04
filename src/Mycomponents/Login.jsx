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
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";

export default class Login extends Component {
  render() {
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login your account</Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = "Required Feild **";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address **";
                  }

                  if (!values.password) {
                    errors.password = "Required Feild **";
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
                    <FormControl id="email" mt={2}>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="text"
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
                        Login
                      </Button>
                    </Stack>
                    <Stack pt={1}>
                      <Text align={"left"}>
                        Don't have an account?{" "}
                        <Link to="/registrationpage">
                          <Text as={"span"} color={"blue.400"}>
                            Sign Up
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
