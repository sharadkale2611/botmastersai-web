import LegalPage from "@/components/legal/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <>
        <h2>No Guarantee</h2>

        <p>
          Botmaster makes reasonable efforts to provide accurate information, but no guarantees are made regarding completeness or accuracy.
        </p>

        <h2>Internship Disclaimer</h2>

        <p>
          Internship participation does not guarantee employment or placement.
        </p>

        <h2>External Links</h2>

        <p>
          Botmaster is not responsible for third-party websites linked from this website.
        </p>
      </>
    </LegalPage>
  );
}