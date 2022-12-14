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
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showsnipper: false,
  };
  render() {
    let autofillemail;
    if (
      this.props &&
      this.props.userLoginReducer &&
      this.props.userLoginReducer.userInfo &&
      this.props.userLoginReducer.userInfo.savedata &&
      this.props.userLoginReducer.userInfo.savedata.email
    ) {
      autofillemail = this.props.userLoginReducer.userInfo.savedata.email;
    } else {
      autofillemail = "";
    }

    return (
      <>
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Login your account</Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <Formik
                  initialValues={{
                    email: autofillemail,
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
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    this.setState({ showsnipper: true });
                    //console.log(values);
                    //alert(JSON.stringify(values, null, 2));
                    const reqdata = {
                      email: values.email,
                      password: values.password,
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
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
        <ToastContainer />
      </>
    );
  }
}


export default Login;
