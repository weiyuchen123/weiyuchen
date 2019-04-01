package cn.com.yusys.yusp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.com.yusys.yusp.commons.mapper.CommonMapper;
import cn.com.yusys.yusp.commons.service.CommonService;
import cn.com.yusys.yusp.domain.Book;
import cn.com.yusys.yusp.repository.mapper.BookMapper;
/**
 * @项目名称: Book模块
 * @类名称: BookService
 * @类描述: #服务类
 * @功能描述: 
 * @创建人: shilinghuai
 * @创建时间: 2019-03-29 11:12:49
 * @修改备注: 
 * @修改记录: 修改时间    修改人员    修改原因
 * -------------------------------------------------------------
 * @version 1.0.0
 * @Copyright (c) 2017宇信科技-版权所有
 */
@Service
public class BookService extends CommonService {
    @Autowired
    private BookMapper bookMapper;

    @Override
    protected CommonMapper<?> getMapper() {
        return bookMapper;
    }

}
