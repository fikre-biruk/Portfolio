# Conventions

# General

These conventions apply to all new code unless there is a clear reason to follow an existing pattern.

Prioritize:

* Readability
* Consistency
* Simplicity
* Reusability
* Maintainability

Follow existing project patterns before introducing new ones.

---

# Naming

Components

* PascalCase

Examples

* HeroSection
* ProjectCard
* ContactForm

Variables

* camelCase

Examples

* currentTheme
* projectList

Constants

* UPPER_SNAKE_CASE only for true constants.

Files

* Match the exported component or module name.
* Use kebab-case for routes.
* Avoid unnecessary abbreviations.

---

# Components

* Keep components focused on a single responsibility.
* Prefer composition over deeply nested components.
* Extract reusable UI instead of duplicating markup.
* Keep public component APIs simple.
* Avoid oversized components.

---

# React

* Use functional components.
* Prefer hooks over class-based patterns.
* Keep state as local as possible.
* Lift state only when necessary.
* Avoid unnecessary prop drilling.
* Memoize only when profiling indicates a benefit.

---

# React Three Fiber

* Keep scenes modular.
* Separate scene composition from animation logic.
* Keep models reusable.
* Keep camera configuration reusable.
* Keep lighting reusable.
* Avoid monolithic scene files.

---

# Styling

* Use Tailwind CSS for application styling.
* Keep utility classes organized.
* Extract reusable UI patterns instead of repeating styles.
* Avoid unnecessary custom CSS.

---

# Animations

* Use Framer Motion for UI animations.
* Use React Three Fiber for 3D animation.
* Keep animation timing consistent.
* Avoid duplicated animation logic.
* Respect reduced-motion preferences whenever practical.

---

# Assets

* Optimize images before adding them.
* Compress GLB models.
* Optimize textures.
* Remove unused assets.
* Prefer reusable assets over duplicates.

---

# Error Handling

* Fail gracefully.
* Surface meaningful errors.
* Provide loading and fallback states where appropriate.
* Never silently ignore failures.

---

# Dependencies

Before adding a package:

* Check whether the functionality already exists.
* Prefer native platform features.
* Prefer existing project utilities.
* Avoid unnecessary dependencies.

---

# Comments

* Explain intent, not obvious implementation.
* Keep comments synchronized with the code.
* Remove obsolete comments.

---

# Logging

* Log only useful debugging information.
* Never log secrets or sensitive data.
* Remove temporary debugging logs before merging.

---

# Refactoring

When refactoring:

* Preserve behavior.
* Keep changes incremental.
* Avoid mixing feature work with large refactors.
* Reuse existing abstractions whenever practical.

---

# Documentation

Update documentation only when:

* Public behavior changes.
* Folder structure changes.
* Public APIs change.
* Existing documentation becomes inaccurate.

Avoid documenting implementation details that are already clear from the code.
