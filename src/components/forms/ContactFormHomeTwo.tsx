
'use client'
import React, { useState } from 'react';
import NiceSelect from '@/ui/NiceSelect';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  projectType: string;
  projectDescription: string;
  budgetRange: string;
  timeline: string;
}

const schema = yup
  .object({
    fullName: yup.string().required("Full Name is required").label("Full Name"),
    email: yup.string().required("Email Address is required").email("Please enter a valid email address").label("Email Address"),
    phoneNumber: yup.string().optional().label("Phone Number"),
    projectType: yup.string().required("Project Type is required").notOneOf([""], "Please select a project type").label("Project Type"),
    projectDescription: yup.string().required("Project Description is required").label("Project Description"),
    budgetRange: yup.string().required("Budget Range is required").notOneOf([""], "Please select a budget range").label("Budget Range"),
    timeline: yup.string().required("Timeline is required").notOneOf([""], "Please select a timeline").label("Timeline"),
  })
  .required() as yup.ObjectSchema<ContactFormData>;

const projectTypeOptions = [
  { value: "", text: "Select Project Type" },
  { value: "web-app", text: "Web Application" },
  { value: "mobile-app", text: "Mobile App" },
  { value: "ai-automation", text: "AI/Automation Solution" },
  { value: "ecommerce", text: "E-commerce Platform" },
  { value: "api-dev", text: "API Development" },
  { value: "cloud-devops", text: "Cloud/DevOps Setup" },
  { value: "workflow-automation", text: "Workflow Automation (n8n)" },
  { value: "other", text: "Other" },
];

const budgetRangeOptions = [
  { value: "", text: "Select Budget Range" },
  { value: "under-1000", text: "Under $1,000" },
  { value: "1000-5000", text: "$1,000 - $5,000" },
  { value: "5000-10000", text: "$5,000 - $10,000" },
  { value: "10000-25000", text: "$10,000 - $25,000" },
  { value: "25000-plus", text: "$25,000+" },
  { value: "not-sure", text: "Not sure yet" },
];

const timelineOptions = [
  { value: "", text: "Select Timeline" },
  { value: "asap", text: "ASAP (1-2 weeks)" },
  { value: "1-month", text: "1 month" },
  { value: "2-3-months", text: "2-3 months" },
  { value: "flexible", text: "Flexible" },
];

const ContactFormHomeTwo = () => {
  const [projectType, setProjectType] = useState<{ value: string; text: string }>(projectTypeOptions[0]);
  const [budgetRange, setBudgetRange] = useState<{ value: string; text: string }>(budgetRangeOptions[0]);
  const [timeline, setTimeline] = useState<{ value: string; text: string }>(timelineOptions[0]);

  const projectTypeHandler = (item: { value: string; text: string }, name: string) => {
    setProjectType(item);
  };

  const budgetRangeHandler = (item: { value: string; text: string }, name: string) => {
    setBudgetRange(item);
  };

  const timelineHandler = (item: { value: string; text: string }, name: string) => {
    setTimeline(item);
  };

  const { register, handleSubmit, reset, setValue, formState: { errors }, } = useForm<ContactFormData>({ 
    resolver: yupResolver(schema),
    defaultValues: {
      projectType: "",
      budgetRange: "",
      timeline: "",
    }
  });

  const getDisplayText = (value: string, options: { value: string; text: string }[]) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.text : value;
  };

  const onSubmit = (data: ContactFormData, e?: React.BaseSyntheticEvent) => {
    // Prevent default form submission
    if (e) {
      e.preventDefault();
    }

    console.log("Form submitted with data:", data);

    try {
      // Format the email body with all form data
      const projectTypeText = getDisplayText(data.projectType, projectTypeOptions);
      const budgetRangeText = getDisplayText(data.budgetRange, budgetRangeOptions);
      const timelineText = getDisplayText(data.timeline, timelineOptions);
      
      const emailSubject = encodeURIComponent(`Project Inquiry: ${projectTypeText}`);
      
      // Simplified email body without special characters to avoid encoding issues
      const emailBodyText = `Hello Ali Latif,

I am interested in discussing a project with you. Please find my project details below:

========================================
PROJECT DETAILS
========================================

CONTACT INFORMATION
----------------------------------------
Full Name: ${data.fullName}
Email Address: ${data.email}
${data.phoneNumber ? `Phone Number: ${data.phoneNumber}\n` : ''}
----------------------------------------

PROJECT INFORMATION
----------------------------------------
Project Type: ${projectTypeText}
Budget Range: ${budgetRangeText}
Timeline: ${timelineText}
----------------------------------------

PROJECT DESCRIPTION
----------------------------------------
${data.projectDescription}
----------------------------------------

I look forward to hearing from you soon.

Best regards,
${data.fullName}`;
      
      const emailBody = encodeURIComponent(emailBodyText);

      // Open email client with pre-filled data
      const mailtoLink = `mailto:alilatif.dev@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      // Show success notification first
      toast.success("Opening email client...");
      
      // Open email client - use setTimeout to ensure toast shows first
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 100);
      
      // Reset form after a short delay
      setTimeout(() => {
        reset();
        setProjectType(projectTypeOptions[0]);
        setBudgetRange(budgetRangeOptions[0]);
        setTimeline(timelineOptions[0]);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };


  // Update form values when dropdowns change
  React.useEffect(() => {
    if (projectType.value) {
      setValue("projectType", projectType.value, { shouldValidate: true });
    }
  }, [projectType, setValue]);

  React.useEffect(() => {
    if (budgetRange.value) {
      setValue("budgetRange", budgetRange.value, { shouldValidate: true });
    }
  }, [budgetRange, setValue]);

  React.useEffect(() => {
    if (timeline.value) {
      setValue("timeline", timeline.value, { shouldValidate: true });
    }
  }, [timeline, setValue]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tp-contact-2__select .nice-select {
          height: 32px !important;
          line-height: 32px !important;
        }
        .tp-contact-2__select .nice-select .current {
          line-height: 32px !important;
          height: 32px !important;
          display: flex;
          align-items: center;
        }
        .tp-contact-2__select {
          overflow: visible !important;
          position: relative;
        }
        .tp-contact-2__select .nice-select .list {
          z-index: 9999 !important;
          max-height: 300px;
          overflow-y: auto;
        }
        form {
          overflow: visible !important;
        }
        .tp-contact-2__bottom-info {
          overflow: visible !important;
        }
        .form_error {
          color: #ff4444 !important;
          font-size: 13px;
          margin-top: 5px;
          margin-bottom: 0;
          display: block;
        }
        .tp-contact-2__input .focus-border,
        .tp-contact-2__textarea .focus-border,
        .tp-contact-2__select .focus-border {
          transition: width 0.5s ease !important;
          will-change: width;
        }
        .tp-contact-2__input input:not(:focus) ~ .focus-border,
        .tp-contact-2__textarea textarea:not(:focus) ~ .focus-border {
          width: 0 !important;
        }
        .Toastify__toast {
          font-family: var(--tp-ff-dmsans, sans-serif) !important;
          font-size: 14px !important;
          padding: 12px 16px !important;
        }
        .Toastify__toast--success {
          background: #434966 !important;
          color: #fff !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .Toastify__toast--success .Toastify__toast-icon {
          color: #4ade80 !important;
          background: rgba(74, 222, 128, 0.1) !important;
          border-radius: 50% !important;
          padding: 4px !important;
          width: 24px !important;
          height: 24px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .Toastify__toast--error {
          background: #ff4444 !important;
          color: #fff !important;
        }
        .Toastify__toast--error .Toastify__toast-icon {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.2) !important;
          border-radius: 50% !important;
          padding: 4px !important;
          width: 24px !important;
          height: 24px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .Toastify__toast-icon {
          margin-right: 12px !important;
          flex-shrink: 0 !important;
        }
      `}} />
      <form onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log("Form validation errors:", errors);
        toast.error("Please fill in all required fields correctly.");
      })} style={{ width: '100%', maxWidth: '100%', overflow: 'visible', position: 'relative' }}>
        <div className="row" style={{ overflow: 'visible' }}>
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-contact-2__input">
              <input 
                className="input-field" 
                type="text" 
                placeholder="Full Name *" 
                style={{ height: '32px' }}
                {...register("fullName")} 
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.fullName?.message}</p>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-contact-2__input">
              <input 
                className="input-field" 
                type="email" 
                placeholder="Email Address *" 
                style={{ height: '32px' }}
                {...register("email")} 
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.email?.message}</p>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-contact-2__input">
              <input 
                className="input-field" 
                type="tel" 
                placeholder="Phone Number" 
                style={{ height: '32px' }}
                {...register("phoneNumber")} 
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.phoneNumber?.message}</p>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-contact-2__select" style={{ height: '32px' }}>
              <NiceSelect
                className="input-field"
                options={projectTypeOptions}
                defaultCurrent={0}
                onChange={projectTypeHandler}
                name="projectType"
                placeholder="Select Project Type *"
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.projectType?.message}</p>
          </div>
          <div className="col-xl-12 mb-50">
            <div className="tp-contact-2__textarea">
              <textarea 
                className="input-field" 
                placeholder="Brief description of what you need built *" 
                rows={4}
                style={{ height: '70px', minHeight: '70px' }}
                {...register("projectDescription")}
              ></textarea>
              <span className="focus-border"></span>
              <p className="form_error">{errors.projectDescription?.message}</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50" style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
            <div className="tp-contact-2__select" style={{ height: '32px', overflow: 'visible', position: 'relative' }}>
              <NiceSelect
                className="input-field"
                options={budgetRangeOptions}
                defaultCurrent={0}
                onChange={budgetRangeHandler}
                name="budgetRange"
                placeholder="Select Budget Range *"
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.budgetRange?.message}</p>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50" style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
            <div className="tp-contact-2__select" style={{ height: '32px', overflow: 'visible', position: 'relative' }}>
              <NiceSelect
                className="input-field"
                options={timelineOptions}
                defaultCurrent={0}
                onChange={timelineHandler}
                name="timeline"
                placeholder="Select Timeline *"
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.timeline?.message}</p>
          </div>
          {/* <div className="col-xl-12 mb-50">
            <div className="tp-contact-2__input">
              <label style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                marginBottom: '15px', 
                display: 'block',
                fontSize: '14px'
              }}>
                Do you have existing designs/documentation? *
              </label>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', maxWidth: '100%' }}>
                <label style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  <input 
                    type="radio" 
                    value="yes" 
                    {...register("hasDesigns")} 
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  Yes
                </label>
                <label style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  <input 
                    type="radio" 
                    value="no" 
                    {...register("hasDesigns")} 
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  No
                </label>
                <label style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  <input 
                    type="radio" 
                    value="partially" 
                    {...register("hasDesigns")} 
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  Partially
                </label>
              </div>
              <p className="form_error">{errors.hasDesigns?.message}</p>
            </div>
          </div> */}
          <div className="col-xl-12">
            <div className="tp-contact-2__btn text-center ">
              <div className="parallax-wrap d-inline-block">
                <div className="parallax-element">
                  <button 
                    className="tp-btn-pink-large" 
                    type="submit"
                    onClick={(e) => {
                      console.log("Button clicked");
                      // Don't prevent default here, let form handle it
                    }}
                  >
                    <span data-hover="Send Message">
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeTwo;