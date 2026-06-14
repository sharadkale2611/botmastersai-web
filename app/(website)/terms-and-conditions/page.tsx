import LegalPage from "@/components/legal/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <>
        <h2>Acceptance</h2>

        <p>
          By accessing Botmaster services and website, you agree to these terms.
        </p>

        <h2>Services</h2>

        <ul>
          <li>Software Development</li>
          <li>AI Solutions</li>
          <li>Internships</li>
          <li>Training Programs</li>
        </ul>

        <h2>Intellectual Property</h2>

        <p>
          All content and materials belong to Botmaster.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          Botmaster shall not be liable for indirect damages arising from the use of services.
        </p>
      </>
    </LegalPage>
  );
}