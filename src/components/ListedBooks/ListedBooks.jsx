import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const allBooks = useLoaderData()

    useEffect(() => {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        // console.log(storedReadList,allBooks,storedReadListInt)
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)

    }, [])

    const handleSort = sortType => {
        setSort(sortType)

        if (sortType === 'num of pages') {
            const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortReadList)
        }

        if (sortType === 'Ratings') {
            const sortReadList = [...readList].sort((a,b) => a.rating - b.rating)
            setReadList(sortReadList)
        }
    }

    return (
        <div>
            <h3 className='text-3xl my-8'>listed books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort ? `sort by:${sort}` : 'Sort By'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('num of pages')}><a>No of pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    <div className=''>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;