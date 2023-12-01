import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
import { BiChevronRight, BiChevronsRight } from "react-icons/bi";
export default function BannerForm() {
  const { form } = globalData;
  const sections = form?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState({});

  const findClass = (field) => {
    switch (field) {
      // case "phone":
      case "full_name":
      case "email":
        return "bg-transparent border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent p-3 w-full";
      case "message":
        return "h-[115px] resize-none bg-transparent border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full";
      default:
        return "";
    }
  };
  const findWrapperClass = (field) => {
    switch (field) {
      case "full_name":
      case "email":
      case "message":
        return "col-span-2";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-[600px] relative xl:order-first z-[50] right-0 xl:py-6 2xl:py-10 xl:px-10">
      <div className="flex flex-col items-start w-full md:w-[611px] h-full bg-[#fff] shadow-inner">
        <div className="relative flex flex-col justify-center w-full h-full px-4 py-10 gap-y-6 xl:px-8 lg:py-12">
          <div className="text-secondary text-[40px] font-[700] text-center">
            <p className="ml-2">Inquire Now</p>
          </div>

          {sections.map((section) => {
            const fields = section?.fields || [];
            console.log("section", section);
            return (
              <Fragment key={section?.state_name}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    let data = {};
                    fields
                      .filter((field) => {
                        let invalid = false;

                        if (
                          !formState[
                            `${section?.state_name}.${field?.state_name}`
                          ] ||
                          formState[
                            `${section?.state_name}.${field?.state_name}`
                          ] === ""
                        )
                          invalid = true;

                        console.log(invalid, "invalid");

                        return invalid;
                      })
                      .map((field) => {
                        data = {
                          ...data,
                          [`${section?.state_name}.${field?.state_name}`]: [
                            `*Invalid ${field?.title}`,
                          ],
                        };
                        return {
                          [`${section?.state_name}.${field?.state_name}`]: [
                            "*Invalid test",
                          ],
                        };
                      });
                    console.log("test", data);
                    if (Object.keys(data).length) {
                      setErrors(data);
                    } else {
                      console.log("submit");
                      formSubmit(
                        e,
                        "mybusiness-contact-us-form",
                        null,
                        sections,
                        setErrors,
                        (result) =>
                          alert(result?.data.message ?? "Message Success")
                      );
                    }
                  }}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {fields.map((field) => (
                      <Fragment key={field?.state_name}>
                        {console.log(field, "eventtt")}
                        <FormField
                          {...field}
                          className={findClass(field?.state_name)}
                          wrapperclassname={findWrapperClass(field?.state_name)}
                          error={isError(
                            errors,
                            section?.state_name,
                            field?.state_name
                          )}
                          errortype="border"
                          onChange={(e) => {
                            setFormState((prev) => {
                              return {
                                ...prev,
                                [`${section?.state_name}.${field?.state_name}`]:
                                  e.target.value,
                              };
                            });
                          }}
                        />
                        <span
                          className={`text-xs pb-2 text-red-600 ${
                            !Object.keys(errors).length ? "hidden" : ""
                          }`}
                        >
                          {isError(
                            errors,
                            section?.state_name,
                            field?.state_name
                          )}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  {form?.attributes?.uses_captcha && (
                    <RenderCaptcha setToken={setToken} />
                  )}
                  <div className="flex justify-center pt-5">
                    <button
                      name="Submit"
                      className="flex items-center px-10 py-3 border text-secondary border-secondary"
                    >
                      Submit &nbsp;
                      <BiChevronRight /> <BiChevronRight />
                    </button>
                  </div>
                </form>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
