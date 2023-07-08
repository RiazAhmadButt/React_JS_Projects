import { useFormik } from 'formik';
import * as Yup from 'yup';
import './form.css';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(10, 'Must be 8 characters or less').min(8, 'Must be 10 characters')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form-body">
      <div className='heading'>
        <h1>Registration Form</h1>
      </div>
      <div className='input-field'>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className='error'>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className='input-field'>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className='error'>{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className='input-field'>
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className='input-field'>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <button type="submit" className='btn'>Submit</button>
      </div>
    </form>
  );
};
