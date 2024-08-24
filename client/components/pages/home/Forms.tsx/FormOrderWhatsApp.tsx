"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  userName: z.string().min(2).max(50),
  note: z.string().max(50).optional(),
  payMethod: z.enum(["transferency", "cash"]),
  retireMethod: z.enum(["delivery", "personal"]),
  code: z.string().optional()
});

const FormOrderWhatsApp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      note: "",
      payMethod: "cash",
      retireMethod: "delivery",
      
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-red-400"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Metodo de pago</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl className="">
                        <RadioGroupItem
                          className="border-red-300 text-red-400"
                          value="transferency"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        transferencia
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-red-300 text-red-400"
                          value="cash"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">efectivo</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="retireMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Metodo de retiro</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl className="">
                        <RadioGroupItem
                          className="border-red-300 text-red-400"
                          value="delivery"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Delivery</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-red-300 text-red-400"
                          value="personal"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">En persona</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-red-400"
                    placeholder="opcional"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nota</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="opcional"
                    className="resize-none focus-visible:ring-red-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-red-600" type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormOrderWhatsApp;
