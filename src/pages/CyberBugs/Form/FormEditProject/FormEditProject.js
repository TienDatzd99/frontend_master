import React, { useEffect, useRef } from 'react';
import { Col, DatePicker, Drawer, Form, Input, Row, Select } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../../redux/type/CyberBugs/CyberBugs';
const { Option } = Select;



function FormEditProject(props) {

  const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrayProjectCategory)
  const dispatch = useDispatch()
  const handleEditorChange = (content, editor) => {

  }

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


    dispatch({
      type: 'SET_SUBMIT_EDIT_PROJECT',
      submitFunction: handleSubmit
    })
  }, [])

  const editorRef = useRef(null);
  return (
    <div>
      <form className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <div className="form-group">

              <p className='font-weight-bold'>Project id</p>
              <input value={values.id} type="text" className="form-control" name='id' disabled />


            </div>
          </div>
          <div className='col-4'>
            <div className="form-group">

              <p className='font-weight-bold'>Project name</p>
              <input value={values.projectName} type="text" className="form-control" name='projectName' onChange={handleChange} />


            </div>
          </div>
          <div className='col-4'>
            <div className="form-group">

              <p className='font-weight-bold'>Project Category</p>
              <select name='categoryId' value={values.categoryId}>
                {arrProjectCategory?.map((item, index) => {
                 return <option value={item.id} key={index}>{item.projectCategoryName}</option>
                })}

              </select>


            </div>
          </div>
          <div className='col-12'>
            <div className="form-group">
              <p className='font-weight-bold'>Description</p>
              <Editor
                name='description'
                apiKey='your-api-key'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={values.description}
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
          </div>
        </div>
      </form >
    </div>
  );
}
const EditProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectList } = props;
    return {
      id: projectList?.id,
      projectName: projectList?.projectName,
      description: projectList?.description,
      categoryId: projectList?.categoryId
    }
  },
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const action = {
      type: 'UPDATE_PROJECT_SAGA',
      projectUpdate: values
    }
    props.dispatch(action);
    // console.log

  },

  displayName: '',
})(FormEditProject);
const mapStatetoProps = (state) => ({
  projectList: state.ProjectReducer.projectEditList

})

export default connect(mapStatetoProps)(EditProjectForm)
