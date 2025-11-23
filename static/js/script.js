document.addEventListener("DOMContentLoaded", function () {
  // Add education entry
  document
    .getElementById("add-education")
    ?.addEventListener("click", function () {
      const educationFields = document.getElementById("education-fields");
      const newEntry = document.createElement("div");
      newEntry.className = "education-entry";
      newEntry.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Institution *</label>
                    <input type="text" name="education_institute[]" required placeholder="University or School Name">
                </div>
                
                <div class="form-group">
                    <label>Degree *</label>
                    <input type="text" name="education_degree[]" required placeholder="Degree Title">
                </div>
                
                <div class="form-group">
                    <label>Year</label>
                    <input type="text" name="education_year[]" placeholder="2018 - 2022">
                </div>
            </div>
        `;
      educationFields.appendChild(newEntry);

      // Add animation
      newEntry.style.opacity = "0";
      setTimeout(() => {
        newEntry.style.transition = "opacity 0.3s ease";
        newEntry.style.opacity = "1";
      }, 10);
    });

  // Add experience entry
  document
    .getElementById("add-experience")
    ?.addEventListener("click", function () {
      const experienceFields = document.getElementById("experience-fields");
      const newEntry = document.createElement("div");
      newEntry.className = "experience-entry";
      newEntry.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Company *</label>
                    <input type="text" name="experience_company[]" required placeholder="Company Name">
                </div>
                
                <div class="form-group">
                    <label>Position *</label>
                    <input type="text" name="experience_position[]" required placeholder="Your Job Title">
                </div>
                
                <div class="form-group">
                    <label>Year</label>
                    <input type="text" name="experience_year[]" placeholder="2020 - Present">
                </div>
            </div>
            
            <div class="form-group">
                <label>Description</label>
                <textarea name="experience_description[]" rows="3" placeholder="Describe your responsibilities and achievements"></textarea>
            </div>
        `;
      experienceFields.appendChild(newEntry);

      // Add animation
      newEntry.style.opacity = "0";
      setTimeout(() => {
        newEntry.style.transition = "opacity 0.3s ease";
        newEntry.style.opacity = "1";
      }, 10);
    });

  // Add skill entry
  document.getElementById("add-skill")?.addEventListener("click", function () {
    const skillsFields = document.getElementById("skills-fields");
    const newEntry = document.createElement("div");
    newEntry.className = "form-group";
    newEntry.innerHTML = `
            <input type="text" name="skill[]" placeholder="e.g. Python, Project Management, etc.">
        `;
    skillsFields.appendChild(newEntry);

    // Add animation
    newEntry.style.opacity = "0";
    setTimeout(() => {
      newEntry.style.transition = "opacity 0.3s ease";
      newEntry.style.opacity = "1";
    }, 10);
  });

  // Add language entry
  document
    .getElementById("add-language")
    ?.addEventListener("click", function () {
      const languagesFields = document.getElementById("languages-fields");
      const newEntry = document.createElement("div");
      newEntry.className = "form-row";
      newEntry.innerHTML = `
            <div class="form-group">
                <label>Language</label>
                <input type="text" name="language[]" placeholder="e.g. English">
            </div>
            <div class="form-group">
                <label>Proficiency</label>
                <select name="proficiency[]">
                    <option value="">Select Proficiency</option>
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Basic">Basic</option>
                </select>
            </div>
        `;
      languagesFields.appendChild(newEntry);

      // Add animation
      newEntry.style.opacity = "0";
      setTimeout(() => {
        newEntry.style.transition = "opacity 0.3s ease";
        newEntry.style.opacity = "1";
      }, 10);
    });

  // Form validation
  const cvForm = document.getElementById("cvForm");
  if (cvForm) {
    cvForm.addEventListener("submit", function (e) {
      // Show loading state
      const submitButton = cvForm.querySelector(".btn-primary");
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Generating CV...';
      submitButton.disabled = true;

      // Revert after 3 seconds in case of error
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }, 3000);
    });
  }

  // Add focus effects to form elements
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });
});
