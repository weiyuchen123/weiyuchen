package cn.com.yusys.yusp.domain;

import cn.com.yusys.yusp.commons.mapper.domain.BaseDomain;
import cn.com.yusys.yusp.commons.mapper.annotation.Generated;
import cn.com.yusys.yusp.commons.mapper.annotation.GenerationType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * @项目名称: Book模块
 * @类名称: Book
 * @类描述: #数据实体类
 * @功能描述: 
 * @创建人: shilinghuai
 * @创建时间: 2019-03-29 11:12:49
 * @修改备注: 
 * @修改记录: 修改时间    修改人员    修改原因
 * -------------------------------------------------------------
 * @version 1.0.0
 * @Copyright (c) 2017宇信科技-版权所有
 */
@Entity
@Table(name = "BOOK")
public class Book extends BaseDomain implements Serializable{
	private static final long serialVersionUID = 1L;
	
	/** ID **/
	@Id
	@Column(name = "ID")
	@Generated(GenerationType.UUID)
	private String id;
	
	/** TITLE **/
	@Column(name = "TITLE", unique = false, nullable = true, length = 35)
	private String title;
	
	/** AUTHOR **/
	@Column(name = "AUTHOR", unique = false, nullable = true, length = 36)
	private String author;
	
	/** PUBLISH_TIME **/
	@Column(name = "PUBLISH_TIME", unique = false, nullable = true, length = 20)
	private String publishTime;
	
	
	/**
	 * @param id
	 */
	public void setId(String id) {
		this.id = id == null ? null : id.trim();
	}
	
    /**
     * @return Id
     */	
	public String getId() {
		return this.id;
	}
	
	/**
	 * @param title
	 */
	public void setTitle(String title) {
		this.title = title == null ? null : title.trim();
	}
	
    /**
     * @return Title
     */	
	public String getTitle() {
		return this.title;
	}
	
	/**
	 * @param author
	 */
	public void setAuthor(String author) {
		this.author = author == null ? null : author.trim();
	}
	
    /**
     * @return Author
     */	
	public String getAuthor() {
		return this.author;
	}
	
	/**
	 * @param publishTime
	 */
	public void setPublishTime(String publishTime) {
		this.publishTime = publishTime == null ? null : publishTime.trim();
	}
	
    /**
     * @return PublishTime
     */	
	public String getPublishTime() {
		return this.publishTime;
	}


    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Book other = (Book) that;
		return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
        	&& (this.getTitle() == null ? other.getTitle() == null : this.getTitle().equals(other.getTitle()))
        	&& (this.getAuthor() == null ? other.getAuthor() == null : this.getAuthor().equals(other.getAuthor()))
        	&& (this.getPublishTime() == null ? other.getPublishTime() == null : this.getPublishTime().equals(other.getPublishTime()))
        ;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getTitle() == null) ? 0 : getTitle().hashCode());
        result = prime * result + ((getAuthor() == null) ? 0 : getAuthor().hashCode());
        result = prime * result + ((getPublishTime() == null) ? 0 : getPublishTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append("[");
        sb.append("Hash = ").append(hashCode());
		sb.append(", id=").append(id);
		sb.append(", title=").append(title);
		sb.append(", author=").append(author);
		sb.append(", publishTime=").append(publishTime);
        sb.append("]");
        return sb.toString();
    }
}