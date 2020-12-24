import React, { Fragment } from 'react'

class Content extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="grid grid-cols-6 gap-6 container mx-auto lg:mt-6 mt-5 px-3">
          <section className="md:col-span-4 col-span-6 lg:h-96 h-60 p-3 ring ring-blue-300 rounded-md">
            <textarea
            name="" id=""
            placeholder="Insert some text here..."
            className="resize-none h-full w-full placeholder-gray-800 placeholder-opacity-40 break-all focus:outline-none"
            ></textarea>
          </section>
          <aside className="md:col-span-2 col-span-6 px-3 rounded-md ring ring-blue-300">
            <div className="py-3">
              <div className="mx-2">
                <p className="">Characters:<span className="pl-1">99999</span></p>
              </div>
              <div className="mx-2">
                <p className="">Words:<span className="pl-1">99999</span></p>
              </div>
              <div className="mx-2">
                <p className="">Sentences:<span className="pl-1">99999</span></p>
              </div>
              <div className="mx-2">
                <p className="">Paragraphs:<span className="pl-1">99999</span></p>
              </div>
            </div>
            <hr/>
            <p className="my-3 text-lg">Top Keyword:</p>
            <div className="my-2 flex flex-wrap">
              <div className="mb-2 mr-2 flex border border-gray-400 rounded-2xl shadow px-4 py-1">
                <p className="font-bold">Lorem:</p><span className="ml-1">10</span>
              </div>
              <div className="mb-2 mr-2 flex border border-gray-400 rounded-2xl shadow px-4 py-1">
                <p className="font-bold">Lorem:</p><span className="ml-1">10</span>
              </div>
              <div className="mb-2 mr-2 flex border border-gray-400 rounded-2xl shadow px-4 py-1">
                <p className="font-bold">Lorem:</p><span className="ml-1">10</span>
              </div>
              <div className="mb-2 mr-2 flex border border-gray-400 rounded-2xl shadow px-4 py-1">
                <p className="font-bold">Lorem:</p><span className="ml-1">10</span>
              </div>
            </div>
          </aside>
        </div>
      </Fragment>
    )
  }
}

export default Content