import React from 'react';

type ConvertKitFormProps = {
  formId?: string;
  uid?: string;
  submitLabel?: string;
  placeholder?: string;
  className?: string;
  includeFirstName?: boolean;
};

export default function ConvertKitForm({
  formId: formIdProp,
  uid: uidProp,
  submitLabel = 'Subscribe',
  placeholder = 'Enter your email',
  className,
  includeFirstName = true,
}: ConvertKitFormProps) {
  const formId = formIdProp ?? process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const uid = uidProp ?? process.env.NEXT_PUBLIC_CONVERTKIT_FORM_UID;

  if (!formId) {
    // If no form id is configured, don't render the form
    return null;
  }

  // Align with current Kit embed domain
  const actionUrl = `https://app.kit.com/forms/${formId}/subscriptions`;

  return (
    <form
      action={actionUrl}
      method="post"
      {...(uid
        ? { 'data-sv-form': String(formId), 'data-uid': String(uid) }
        : {})}
      className={className}
    >
      <div className="flex flex-col gap-2">
        {includeFirstName && (
          <input
            type="text"
            name="fields[first_name]"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
            aria-label="First name"
          />
        )}
        <input
          type="email"
          name="email_address"
          required
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

