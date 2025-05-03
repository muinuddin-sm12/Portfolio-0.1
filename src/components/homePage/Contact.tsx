/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Container from "../shared/Container";
import { FaPhone } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ImSpinner3 } from "react-icons/im";
import { IoIosPaperPlane } from "react-icons/io";
import WP from "../../assets/social (1).png";
import Github from "../../assets/github (1).png";
import FB from "../../assets/facebook.png";
import Insta from "../../assets/social.png";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // try {
    //   console.log(data);
    // } catch (error: any) {
    //   console.log(error);
    // }
    console.log(data);
  };
  return (
    <Container>
      <div className="pt-20 border-t rounded-t-3xl bg-gray-100 p-6">
        {/* <h1 className="text-4xl font-[600] py-14">
          Contact me<span className="text-[#ff652f]">.</span>
        </h1> */}

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 justify-between rounded-2xl">
          <div className="flex flex-col gap-6 md:gap-12">
            <div>
              <h1 className="text-3xl text-gray-800 md:pb-1">Let's talk</h1>
              <p className="text-gray-500">Ask me anything or just say hi..</p>
            </div>
            <div>
              <div className="flex text-sm items-center gap-2 md:pb-2">
                <span>
                  <FaPhone className="text-[#ff652f]"/>
                </span>{" "}
                +971 56 808 8426
              </div>
              <div className="flex text-sm items-center gap-2">
                <span>
                  <HiEnvelope className="text-[#ff652f]"/>
                </span>
                muinuddin.sm12@gmail.com
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="flex gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className=" text-gray-800">Name</FormLabel>
                        <FormControl>
                          <Input
                          placeholder="David"
                            type="text"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className=" text-gray-800">Email</FormLabel>
                        <FormControl>
                          <Input
                          placeholder="example@gmail.com"
                            type="email"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-gray-800">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Hi there" {...field} value={field.value || ""} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="mt-5 cursor-pointer px-4 py-1 rounded-full text-white bg-[#ff652f] text-sm font-[600] "
                >
                  {isSubmitting ? (
                    <ImSpinner3 className="animate-spin text-center text-lg flex items-center justify-center" />
                  ) : (
                    <span className="flex items-center gap-1">
                      Send
                      <IoIosPaperPlane />
                    </span>
                  )}
                </button>
              </form>
            </Form>
            <div className="flex ml-auto items-center gap-2 pt-10">
              <Link href={'https://www.facebook.com/muinuddin.sm12'}><Image src={FB} height={20} width={20} alt="facebook"/></Link>
              <Link href={'/'}><Image src={Insta} height={20} width={20} alt="facebook"/></Link>
              <Link href={'/'}><Image src={WP} height={20} width={20} alt="facebook"/></Link>
              <Link href={'https://github.com/muinuddin-sm12'} target="_blank"><Image src={Github} height={20} width={20} alt="facebook"/></Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
