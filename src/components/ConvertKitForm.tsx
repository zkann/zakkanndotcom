import React from 'react';
import { useEventTracking } from './FacebookPixelTracker';

type ConvertKitFormProps = {
  formId?: string;
  uid?: string;
  submitLabel?: string;
  placeholder?: string;
  className?: string;
  includeFirstName?: boolean;
  tagIds?: string[];
};

export default function ConvertKitForm({
  formId: formIdProp,
  uid: uidProp,
  submitLabel = 'Subscribe',
  placeholder = 'Enter your email',
  className,
  includeFirstName = true,
  tagIds,
}: ConvertKitFormProps) {
  const formId = formIdProp ?? process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const uid = uidProp ?? process.env.NEXT_PUBLIC_CONVERTKIT_FORM_UID;
  const { trackLead, trackFormSubmission } = useEventTracking();

  if (!formId) {
    // If no form id is configured, don't render the form
    return null;
  }

  // Align with current Kit embed domain
  const actionUrl = `https://app.kit.com/forms/${formId}/subscriptions`;

  const handleSubmit = () => {
    // Track form submission
    trackFormSubmission('ConvertKit Newsletter', window.location.pathname);
    trackLead();
  };

  return (
    <form
      action={actionUrl}
      method="post"
      onSubmit={handleSubmit}
      {...(uid
        ? { 'data-sv-form': String(formId), 'data-uid': String(uid) }
        : {})}
      className={className}
    >
      <div className="flex flex-col gap-2">
        {Array.isArray(tagIds) && tagIds.map((id) => (
          <input key={id} type="hidden" name="tags[]" value={id} />
        ))}
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
          className="inline-flex items-center justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

