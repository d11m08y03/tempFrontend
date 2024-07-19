export default function FAQs() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside className="relative h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 flex items-center justify-center" style={{ backgroundColor: '#a3050d' }}>
      <img
         alt="FAQ Illustration"
         src="/faq-image.jpg"
         className="h-7/8 w-7/8 object-contain"
         />
      </aside>



        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h1>

            <div className="mt-8 space-y-4">
              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What are the basic requirements to donate blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  Generally, donors must be in good health, at least 18 years old, and weigh at least 50 kg.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  How often can I donate blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  You can donate whole blood every 56 days, platelets every 7 days (up to 24 times a year), and plasma every 28 days.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What should I do to prepare for donating blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  Stay hydrated, eat a healthy meal before donating, and avoid heavy exercise or lifting before and after donation.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What types of blood donations are there?
                </summary>
                <p className="mt-2 text-gray-600">
                  The main types are whole blood donation, platelet donation, plasma donation, and double red cell donation.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  How long does the blood donation process take?
                </summary>
                <p className="mt-2 text-gray-600">
                  The entire process, including registration, a health screening, the donation itself, and refreshments, usually takes about an hour. The actual blood draw takes about 10 minutes.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Is donating blood safe?
                </summary>
                <p className="mt-2 text-gray-600">
                  Yes, donating blood is safe. All needles and blood collection equipment are sterile and used only once, then discarded.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Will donating blood hurt?
                </summary>
                <p className="mt-2 text-gray-600">
                  You may feel a brief pinch when the needle is inserted, but most donors find the process to be relatively painless.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What happens to my blood after I donate?
                </summary>
                <p className="mt-2 text-gray-600">
                  Your blood is tested for various infections, separated into components (red cells, plasma, platelets), and then distributed to hospitals and clinics.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Can I donate blood if I have a cold or flu?
                </summary>
                <p className="mt-2 text-gray-600">
                  No, you should wait until you are fully recovered from any cold, flu, or other infections before donating blood.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Are there any health benefits to donating blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  Donating blood can help maintain healthy iron levels, reduce the risk of certain diseases, and provides a free health screening.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Can I donate blood if I have a tattoo or piercing?
                </summary>
                <p className="mt-2 text-gray-600">
                  Yes, but you must wait 12 months after getting a tattoo or piercing unless it was done at a licensed facility that uses sterile, single-use equipment.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What should I do after donating blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  Drink plenty of fluids, avoid strenuous activities, and eat a healthy meal. Also, rest for a few minutes before resuming normal activities.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Can I donate blood if I’m on medication?
                </summary>
                <p className="mt-2 text-gray-600">
                  It depends on the medication. Inform the screening staff about any medications you are taking to determine if you are eligible to donate.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Can I donate blood if I have a chronic illness?
                </summary>
                <p className="mt-2 text-gray-600">
                  Some chronic illnesses do not disqualify you from donating, but you should be in good health at the time of donation. Check with the blood donation center for specific eligibility criteria.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Why is there a weight requirement for blood donation?
                </summary>
                <p className="mt-2 text-gray-600">
                  The weight requirement ensures that donors have enough blood volume to safely donate without causing adverse effects to their health.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  How is my privacy protected when I donate blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  Your personal and health information is kept confidential and used only for the purposes of ensuring a safe donation process and matching your blood with recipients.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What should I bring to my blood donation appointment?
                </summary>
                <p className="mt-2 text-gray-600">
                  Bring a valid ID, a list of any medications you are taking, and a completed donor questionnaire if available.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  Can I donate blood if I have traveled recently?
                </summary>
                <p className="mt-2 text-gray-600">
                  Travel to certain areas may temporarily defer you from donating due to the risk of infectious diseases. Check with the donation center for specific guidelines.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  How can I find out my blood type?
                </summary>
                <p className="mt-2 text-gray-600">
                  Your blood type is typically determined during the first donation. You will be informed of your blood type after the donation and testing process.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-lg font-medium text-gray-700">
                  What if I feel unwell after donating blood?
                </summary>
                <p className="mt-2 text-gray-600">
                  If you feel unwell after donating, lie down and rest. If symptoms persist, contact the blood donation center or seek medical advice.
                </p>
              </details>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
