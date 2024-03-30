import React from 'react'
import { useState } from 'react'
import { Formik } from 'formik'
import './AddRecipe.scss'
import * as yup from 'yup' 
import { IoCloseCircle } from "react-icons/io5";
import Select from 'react-select';


const AddRecipe = ({active,setActive}) => {
  const validationsSchema= yup.object().shape({
    recipe_name:yup.string().email('должно быть строкой').required('Обязательно'),
    cooking_time:yup.string().typeError('должно быть строкой').required('Обязательно'),
    difficulty: yup.string().typeError('должно быть строкой').required('Обязательно'),
    description: yup.string().typeError('должно быть строкой').required('Обязательно'),
    ingredients: yup.string().typeError('должно быть строкой').required('Обязательно'),
    category: yup.string().typeError('должно быть строкой').required('Обязательно'),
    image: yup.string().typeError('должно быть файлом').required('Обязательно'),
  });
  const [image, setImage] = useState(null);
  
  const handeleClose=()=>{
    setActive(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (values) => {
    console.log(values);
  };
  function Tab() {
    return [
      {
        viewTab: 'Easy',
        postTab: 'easy',
      },
      {
        viewTab: 'Medium',
        postTab: 'medium',
      },
      {
        viewTab: 'Hard',
        postTab: 'hard',
      },
    ];
  }
  const options = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' }
  ];
  
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsKg = [
    { value: '0,5 kg', label: '0,5 kg' },
    { value: '1 kg', label: '1 kg' },
    { value: '1,5 kg', label: '1,5 kg' }
  ];
  const [opSelect,setopSelect]= useState(null)
  const handleChanges = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
    const handeleSelect=(opSelect)=>{
      setopSelect(opSelect);
    }
  const [category, setCategory] = useState('Easy');
  const [activeTab, setActiveTab] = useState('Easy');
  
  const tabs = Tab();
  const handleActiveClick = (tab) => {
    setActiveTab(tab.viewTab);
    setCategory(tab.postTab);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '480px',
      height: '56px',
      borderRadius: '20px',
      border: '1px solid #8A8A8A',
      outline: 'none',
      font: '500 17px/21px Poppins',
      paddingLeft: '15px',
      background: '#EDEDED',
    })
  }
  const selectStyles={
    control: (provided, state) => ({
      ...provided,
      width: '123px',
      height: '56px',
      border: '1px solid #8A8A8A',
      background: '#EDEDED',
      borderRadius: '16px',
      outline: 'none',
    })
  }

  return (
    <>
      {active && (
        <div className={`modal ${active ? 'active' : ''}`}>
          <div className="modal__overlay">
            <div className="modal__content">
              <Formik
                initialValues={{
                  recipe_name:'',
                  cooking_time: '',
                  difficulty: '',
                  description:'',
                  ingredients:'',
                  image: '',
                  category:''
                }} 
                validateOnBlur
                onSubmit={handleSubmit}
                validationsSchema={validationsSchema}
              >
                {({ values, errors, touched, handleChange, handelBlur, isValid, handleSubmit, dirty }) => {
                  console.log(errors);
                  return (
                    <div className="modal__form">
                      <div className="modal__form-title">
                        <p className='modal__form-p'>Create recipe</p>
                      </div>
                      <IoCloseCircle  className='modal__form-svg' onClick={handeleClose}/>
                      <div className="modal__form-des">
                        <label htmlFor={`image`} className='modal__form-label'>Add a recipe photo</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className='modal__form-img'
                        />
                      </div>
                      <div className="modal__form-des">
                         <label htmlFor={`recipe_name`} className='modal__form-label'>Name your recipe</label>
                         <input
                            type="text"
                            name={`recipe_name`}
                            value={values.recipe_name}
                            className='modal__form-input'
                            onChange={handleChange}  
                            onBlur={handelBlur}       
                          />
                      </div>
                       <div className="modal__form-des">
                            <label htmlFor={`description`} className='modal__form-label'>Add a description</label>
                           <input
                             type="text"
                             name={`description`}
                             value={values.description}
                             className='modal__form-input'
                             onChange={handleChange}  
                             onBlur={handelBlur}       
                            />
                      </div>
                      <div className="modal__form-des">
                      <label htmlFor={`ingredients`} className='modal__form-label'>Add an ingredient</label>
                      <div className="modal__form-box">
                        <input 
                          type="text"
                          name={`ingredients`}
                          value={values.ingredients}
                          onChange={handleChange}  
                          onBlur={handelBlur}  
                          className='modal__form-in'
                        />
                        <Select
                          value={opSelect}
                          name={`ingredients`}
                          onChange={handeleSelect}
                          options={optionsKg}
                          onBlur={handelBlur}  
                          styles={selectStyles}
                        />
                       
                         <div className="modal__form-count">
                            <p className='modal__form-calc'>+</p>
                         </div>
                      </div>
                      
                      </div>
                      <div className="modal__form-des">
                      <label htmlFor={` difficulty`} className='modal__form-label'>Difficulty</label>
                      <div className="modal__form-dif">
                      {tabs.map((tab, idx) => (
                       <div 
                       className={`modal__form-difficulty ${activeTab === tab.viewTab ? 'active' : ''}`} 
                       key={idx}
                       onClick={() => handleActiveClick(tab)}
                       style={{background: activeTab === tab.viewTab ? '#FA9E31':'#EDEDED',
                              color: activeTab === tab.viewTab ? '#FAFAFA':'#343434'   }}>
                        <p className={`modal__form-tab ${activeTab === tab.viewTab ? 'active' : ''}`}>
                        {tab.viewTab}
                        </p>
                       </div>            
                        ))}
                        </div> 
                      </div>
                      <div className="modal__form-des">
                            <label htmlFor={`category`} className='modal__form-label'>Category of mea</label>
                            <Select
                             value={selectedOption}
                             name={`category`}
                             onChange={handleChanges}
                             options={options}
                             onBlur={handelBlur}  
                             placeholder="Select a category"
                             styles={customStyles}
                            />
                         
                      </div>
                      <div className="modal__form-des">
                            <label htmlFor={`category`} className='modal__form-label'>Preparation time</label>
                           <input
                             type="text"
                             name={`cooking_time`}
                             value={values.cooking_time}
                             className='modal__form-input'
                             onChange={handleChange}  
                             onBlur={handelBlur}       
                            />
                      </div>
                      <button className='modal__form-btn' type={`submit`}>Create a recipe</button>
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>   
      )}
    </>
  );
};
export default AddRecipe;
