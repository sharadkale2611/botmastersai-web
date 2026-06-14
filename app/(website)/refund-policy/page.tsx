import LegalPage from "@/components/legal/LegalPage";

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund and Cancellation Policy">
      <>
        <h2>Internship Fees</h2>

        <p>
          Fees paid for internships, training, and services are generally non-refundable.
        </p>

        <h2>Exceptions</h2>

        <ul>
          <li>Duplicate payments.</li>
          <li>Technical payment failures.</li>
          <li>Cancellation approved by Botmaster management.</li>
        </ul>

        <h2>Refund Processing</h2>

        <p>
          Approved refunds may take 7–14 business days.
        </p>
      </>
    </LegalPage>
  );
}