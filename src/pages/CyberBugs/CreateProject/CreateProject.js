import React, { useEffect } from 'react'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup';
import { CREAT_PROJECT_SAGA, GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../redux/type/CyberBugs/CyberBugs';


function CreateProject(props) {
  const dispatch = useDispatch()
  const createProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrayProjectCategory)



  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;

  useEffect(() => {

    dispatch({ type: GET_ALL_PROJECT_CATEGORY_SAGA })


  }, [])

  const handleEditorChange = (content, editor) => {
    setFieldValue('description', content)
  }


  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };


  return (
    <div className='container pt-5'>
      <h3 className='text-center'> CreateProject </h3>
      <form className='container' onSubmit={handleSubmit} onChange={handleChange}>
        <div className='form-group'>
          <p>Name</p>
          <input className='form-control' name='projectName' />
        </div>
        <div className='form-group'>
          <p>Description</p>
          <Editor
            apiKey='your-api-key'
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={handleEditorChange}
          />

        </div>
        <div className='form-group'>
          <select className='form-control' name='categoryId' onChange={handleChange}>

            {createProjectCategory.map((item, index) => {
              return <option value={item.id} key={index}>{item.projectCategoryName}</option>
            })}
          </select>

        </div>
        <button className='btn btn-outline-primary' type='submit'>Create Project</button>

      </form>
    </div>
  )




}
const createProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return {
      projectName: '',
      description: '',
      categoryId: props.arrayProjectCategory[0]?.id

    }
  },
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log('values', values)
    props.dispatch({
      type: CREAT_PROJECT_SAGA,
      newProject: values
    })

  },

  displayName: 'Login CyberBugs',
})(CreateProject);
const mapStatetoProps = (state) => ({
  arrayProjectCategory: state.ProjectCategoryReducer.arrayProjectCategory
})

export default connect(mapStatetoProps)(createProjectForm)