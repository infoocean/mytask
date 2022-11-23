import Footer from "../Templates/Footer";
import Navbar from "../Templates/Header";
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
} from "@chakra-ui/react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}
export default HomePage;

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  enableReinitialize={true}
                  initialValues={{
                    date: "2022-11-23",
                    datetime: "2022-11-24T01:06",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.date) {
                      errors.date = "required";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting }) => {
                    console.log(values);
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
                      <FormControl id="date" mt={2}>
                        <FormLabel>Date</FormLabel>
                        <Input
                          type="date"
                          name="date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.date}
                        />
                        {touched.date && errors.date}
                      </FormControl>
                      <FormControl id="datetime" mt={2}>
                        <FormLabel>Datetime</FormLabel>
                        <Input
                          type="datetime-local"
                          name="datetime"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.datetime}
                        />
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
