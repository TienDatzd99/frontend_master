import React from 'react'
import parse from 'html-react-parser';
export default function InfoMain(props) {

    const { projectDetail } = props
    
    const renderAvatar = () => {
        return props.members?.map((user, index) => {
            return <div className='avatar'>
                <img src={user.avatar} alt='user.avatar'></img>
            </div>
        })
    }
    return (
        <>
            <h3>{projectDetail.projectName}</h3>

            <section dangerouslySetInnerHTML={{ __html: projectDetail.description }}>
                {/* {projectDetail.description} */}
            </section>

            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    <div className="avatar">
                        <img src={require('../../../assets/img/download (1).jfif')} alt='1' />
                    </div>
                    <div className="avatar">
                        <img src={require('../../../assets/img/download (2).jfif')} alt='2' />
                    </div>
                    <div className="avatar">
                        <img src={require('../../../assets/img/download (3).jfif')} alt='3' />
                    </div>
                </div>
                <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
                <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
            </div>
        </>

    )
}