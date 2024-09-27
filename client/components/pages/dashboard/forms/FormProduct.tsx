import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "../Datatables/definitions/products/AllproductsColumn";
import { productInitialValue } from "@/constant/form/productForm";

const formSchema = z.object({
  id: z.string(),
  title: z.string().min(2).max(50),
  price: z.coerce.number(),
  image: z.instanceof(File),
  bestSelling: z.coerce.boolean(),
  description: z.string().optional(),
  category: z.string(),
});

const FormProduct = ({ product }: { product?: Product }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product ?? productInitialValue,
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 grid   align-baseline w-[90%]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-2">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Categoria</FormLabel>
                <Select
               
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Haburguersas">Hamburguesas</SelectItem>
                    <SelectItem value="Pasta">Pasta</SelectItem>
                    <SelectItem value="Ensaladas">Ensaladas</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled
            control={form.control}
            name="bestSelling"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Mesas</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="true">si</SelectItem>
                    <SelectItem value="false">no</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2">
          <FormItem className="w-[50%]">
            <FormLabel className="mb-2">Subir Imagen</FormLabel>
            <Input
              placeholder="opcional"
              {...form.register("image")}
              type="file"
            />
            {form.getFieldState("image").error?.message}
            </FormItem>

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Precio $</FormLabel>
                <FormControl>
                  <Input
                    placeholder="precio"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
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

        <Button className="w-full" type="submit">
          Actualizar
        </Button>
      </form>
    </Form>
  );
};

export default FormProduct;
