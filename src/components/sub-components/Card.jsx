/* eslint-disable react/prop-types */


const Card = ({ id, title, description, badge }) => {
  return (
    <div key={id} className="card">
      <div className="content">
        <div className="back">
          <div className="back-content p-4">
            {id === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M445.1 22.93c-3.8.11-7.9 1.81-11.5 5.98C379.2 107.6 318.8 184.7 257.3 261.4c2.3.9 4.5 1.9 6.5 3.1c4.5 2.5 8.4 5.6 11.7 9C339 197.6 401.3 121.1 455.6 40.87c4.3-9.84 1.1-13.83-3.8-16.4c-1.2-.65-2.6-1.13-4.1-1.37c-.8-.13-1.7-.19-2.6-.17M63.14 46.41c7.69 13.5 16.6 26.49 2.25 47.15c10.45-10.72 22.95-21.51 42.41-1.4c-4.2-10.17-17.26-17.99-6.1-33.71c-17.06 8.58-25.86 0-38.56-12.04M267.2 94.02c-7.4 11.08-18.3 14.68-32.6 10.28c14.3 4.9 21.5 14.5 17.7 31.7c8.3-15.5 18.1-21.4 29.5-17.1c-6.4-6.3-17.3-7-14.6-24.88m181.5 46.78c-4 22.5-6 45.9-43.2 50.9c22.9.8 48.1 3.7 51.7 46.2c5-15-3-37.8 25.6-41.3c-28.6-10.4-30.7-29.2-34.1-55.8m-358.92 96c2.1 24.8-8.1 41.4-37.08 45.6c29.38 3.7 44.88 15.4 45.88 35.5c5.62-13.5-.7-30.8 28.72-36.8c-22.1-5.2-34.82-19.7-37.52-44.3m155.42 39.7l-13.4 16.6c1.5.8 3 1.7 4.5 2.6c4.4 2.8 8.7 6.1 12.3 9.8l15.2-18c-2.3-2.7-5.4-5.4-8.9-7.4c-3-1.7-6.3-3-9.7-3.6M208 304.1c-.8 0-1.5 0-2 .1c-1 .2-1.5.5-1.7.7l-.5.6l-.6.4c-46.9 36-117.06 70.7-173.97 104.3c14.77 4.4 29.83 9.7 44.58 15.6l36.39-30.5L88.37 432c17.03 7.6 33.43 16.2 48.03 25.6l27.3-43.8l-12.2 54.2c9 6.7 17 13.8 23.8 21.1c27.2-59.1 63-100.2 67.7-154.8l.1-.6l.1-.6c.6-2.3-.2-5.7-3.1-10c-3-4.2-7.9-8.7-13.4-12.2c-5.4-3.4-11.5-5.8-15.9-6.5c-1.1-.2-2-.3-2.8-.3m111.2.2c9.7 13.1 9.9 25.8-4.7 38.3c17.6-8.2 30.3-7.2 37.8 3.6c-1.7-9.4-11.1-16.8 3-30.4c-14 4.8-26.1 1.2-36.1-11.5m56.7 90.8c11.7 17.4 20 29.5 4.1 47.8c23.4-10 29.5 7 41.2 13.8c-19.9-26.8-2.6-39.3 14.1-49.5c-30.5 12.8-44.4-.3-59.4-12.1"/></svg>}
            {id === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M152.718 28.524q-2.32-.001-4.63.032c-20.528.29-40.464 2.677-58.374 7.902c-28.656 8.36-52.804 24.703-62.717 51.734c-8.846 24.123-1.132 46.174 14.352 63.112s38.137 30.613 62.14 44.273c24.004 13.66 49.415 27.172 70.094 42.21c20.68 15.037 36.234 31.401 42.22 50.093c1.124 3.506.276 14.454-1.921 23.44c-.876 3.58-1.808 6.718-2.65 9.408l17.546 4.234c.84-2.748 1.747-5.924 2.588-9.365c2.488-10.175 5.153-22.05 1.58-33.207c-7.773-24.272-26.598-43.033-48.777-59.16c-22.179-16.128-48.104-29.824-71.775-43.295s-45.032-26.852-57.76-40.776c-12.728-13.923-17.423-26.537-10.736-44.77c7.498-20.448 25.514-33.257 50.857-40.652c25.343-7.394 57.333-8.66 88.924-5.681c31.59 2.98 62.835 10.149 86.8 18.886c10.344 3.771 19.325 7.848 26.303 11.858c3.216-2.397 6.614-4.797 10.184-6.94c2.174-1.305 4.44-2.527 6.808-3.582a108 108 0 0 0-4.23-2.812c-8.89-5.594-20.05-10.75-32.898-15.434c-25.697-9.368-58.118-16.77-91.276-19.898c-10.88-1.026-21.832-1.6-32.652-1.61m175.904 54.288q-.542.018-1.115.076c-3.062.3-6.985 1.828-11.276 4.404c-6.12 3.675-12.542 9.225-19.238 14.213l62.45 84.068l20.247-4.746c-4.262-30.338-14.22-72.644-43.539-95.263c-2.891-2.231-4.996-2.837-7.529-2.752m52.8 116.097l-17.523 4.108l50.264 214.459h18.488zM57.403 318.597l-1.965 18.478c5.836.202 11.85.48 18.011.834l1.852-17.408zm123.183 13.252l-4.99 18.357l60.283 14.621l5.502-18.306zm-146.85 22.818c-.934 0-1.105-.1-2.558 1.904s-3.197 6.092-4.41 11.504c-2.428 10.824-3.016 26.644-2.05 42.448c.967 15.803 3.432 31.755 6.468 43.209c1.517 5.726 3.24 10.363 4.588 12.89c.299.561.328.53.55.854h9.295a56.5 56.5 0 0 1-4.883-23c0-31.374 25.627-57 57-57s57 25.626 57 57a56.5 56.5 0 0 1-4.882 23h90.515c.458-.604 1.316-1.987 2.149-4.3c1.8-5.002 3.313-13.058 4.273-21.694c1.92-17.273 1.945-37.006 1.945-45.006c0-.625-.316-2.017-3.265-4.594s-8.16-5.655-15.002-8.56c-13.686-5.812-33.77-11.127-56.406-15.409c-45.271-8.564-101.032-13.246-140.327-13.246m64 50.809c-21.645 0-39 17.354-39 39c0 21.645 17.355 39 39 39c21.646 0 39-17.355 39-39c0-21.646-17.354-39-39-39m309.563 30l-7 14h50.875l-7-14zm-44.563 32v14h126v-14z"/></svg>}
            {id === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="m153.654 18l52.57 134.734c1.698 3.994 4.05 5.83 7.243 6.977c3.2 1.15 7.36 1.2 11.058.17s6.71-3.146 7.996-4.915c1.288-1.77 1.634-2.564.505-5.24l-.046-.112L181.57 18zm94.168 120.143l1.88 4.81l-.09-.223c3.346 7.937 1.828 16.822-2.532 22.82c-4.36 5.996-10.773 9.734-17.723 11.67c-6.95 1.937-14.653 2.065-21.98-.57s-14.155-8.447-17.742-16.923l-.05-.118l-1.757-4.5c-31.31 19.804-42.47 42.026-35.367 68.89c1.24 4.681 3.422 12.364 5.964 22.13c74.37-5.274 139.945-23.872 199.808-51.6c-10.297-13.867-22.5-25.83-38.232-34.53c-20.505-11.34-47.652-20.157-72.178-21.857zm120.557 71.52c-61.497 28.81-129.173 48.378-205.575 54.196c2.03 8.683 4.08 18.28 5.95 28.495c89.592-10.084 163.043-26.22 217.755-48.767c-5.743-11.72-11.593-23.19-18.13-33.924m26.04 50.16c-57.093 23.772-131.99 40.087-222.73 50.322C180.697 371.423 179.614 446.752 128 480c16.27 0 31.892-.152 46.926-.45c17.84-25.554 31.27-66.222 32.08-86.146c8.27 16.793 3.297 59.32-5.36 85.434c2.735-.093 5.435-.193 8.127-.297c11.824-12.397 11.724-28.632 14.72-47.284c3.324 14.92 7 32.967 9.505 46.156c11.273-.616 22.152-1.34 32.606-2.183c16.38-20.358 21.65-49.604 18.63-85.48c4.226 29.1 9.116 62.138 11.873 82.55a772 772 0 0 0 27.807-3.614c5.04-18.787-4.1-48.444-2.072-69.54c11.123 43.113 22.247 55.45 33.37 64.043a456 456 0 0 0 15.733-3.526c-4.7-13.95 1.573-22.497 1.18-39.986c5.647 18.99 14.625 26.958 24.428 32.816c6.506-2.1 12.66-4.336 18.492-6.697c-10.538-6.57-10.113-26.374-12.38-42.926c5.954 21.703 14.413 32.418 24.083 37.816c29.124-13.8 48.69-31.534 60.398-53.657c-9.078-3.82-18.674-13.002-28.068-20.092c13.214 7.477 23.684 10.614 32.37 10.93a112 112 0 0 0 3.552-9.868c-56.326-19.528-80.07-64.018-101.58-108.178z"/></svg>}
            {id === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M199 103v50h-78v30h270v-30h-78v-50zm18 18h78v32h-78zm-79.002 80l30.106 286h175.794l30.104-286zm62.338 13.38l.64 8.98l16 224l.643 8.976l-17.956 1.283l-.64-8.98l-16-224l-.643-8.976zm111.328 0l17.955 1.284l-.643 8.977l-16 224l-.64 8.98l-17.956-1.284l.643-8.977l16-224l.64-8.98zM247 215h18v242h-18z"/></svg>}
            {id === 5 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M237.4 20.73c-6.1 42.1-26.8 64.2-63.9 64c31.6 4.5 63.8 8 63.9 64.07c-.6-46.1 24.5-63.07 64.1-64.07c-38-1.5-64.9-16.3-64.1-64m127.8 11.58c-9.1 14.25-20.8 21.29-38.9 10.28c14.9 11.79 18.6 24.76 10.2 38.97c8.9-11.18 17.5-22.73 39-10.27c-17.8-10.06-18.8-23.57-10.3-38.98M59.68 41.69c-2.7 18.8-12 28.6-28.5 28.5c14.1 2 28.4 3.6 28.5 28.52c-.3-20.5 10.9-28.12 28.5-28.52c-16.9-.7-28.9-7.3-28.5-28.5M431 66.28c-2.7 18.8-12 28.6-28.5 28.5c14.1 2 28.4 3.6 28.5 28.52c-.3-20.5 10.9-28.12 28.5-28.52c-16.9-.7-28.9-7.3-28.5-28.5M120.3 116.4c-15.8 53.7-47.76 48-79.35 43.4C76.6 170 90.3 197.1 84.28 239.2c12.66-46 42.62-52.6 79.42-43.4c-37.6-12.1-56.9-35.4-43.4-79.4m187 5c-8.8 61.6-39.3 94-93.6 93.7c46.2 6.5 93.6 11.7 93.6 93.7c-.8-67.3 35.9-92.2 93.8-93.7c-55.5-2.2-94.9-23.9-93.8-93.7m136.8 38.3c-13.1 21.6-29.5 28.8-49.7 20.1c16.3 9.7 33 19.1 20.1 49.6c10.3-25.2 27.9-28.7 49.7-20c-20.3-9.7-31.6-23.9-20.1-49.7M50.7 243.2c9.16 16.7 7.63 30.1-5.61 40c12.46-6.9 24.85-14.3 39.91 5.6c-12.57-16.2-8.2-29 5.61-40c-13.92 9.7-27.47 11.6-39.91-5.6m137.2.3c11.4 26.8-.5 41.3-21.7 50.9c22.7-8.5 40.8-4.5 50.9 21.7c-12.7-31.8 4.8-41.2 21.7-50.9c-21 8.5-37.8.9-50.9-21.7m228 12.6c-26.6 64.7-68.7 91.7-127.8 76.4c48.6 19.8 98.8 38.5 76.4 127.9c17.5-73.7 64.4-90.7 127.9-76.5c-59.9-17.5-96.9-52-76.5-127.8M99.94 295.5c15.66 57.8.86 98.1-47.32 118.5c43.46-11.8 87.38-25.2 118.68 47.4c-26.4-59.3-3.4-95.4 47.3-118.8c-50 19.2-93.1 15-118.66-47.1m169.36 61c-21.8 20.6-43 23.6-63.2 7.3c15.5 16.3 31.6 32.4 7.2 63.3c19.8-25.6 41.2-24.1 63.3-7.3c-20.2-17.4-28.6-37.5-7.3-63.3M443.2 404c-2.7 18.8-12 28.6-28.5 28.5c14.1 2 28.4 3.6 28.5 28.5c-.3-20.5 10.9-28.1 28.5-28.5c-16.9-.7-28.9-7.3-28.5-28.5m-169.7 36c-2.7 18.8-12 28.6-28.5 28.5c14.1 2 28.4 3.6 28.5 28.5c-.3-20.5 10.9-28.1 28.5-28.5c-16.9-.7-28.9-7.3-28.5-28.5"/></svg>}
            {id === 6 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="m233.986 85.262l-63.37 21.11L334.32 160.9l63.373-21.11l-163.707-54.53zm-82.85 33.593v58.088l174.184 58.02v-58.086l-174.183-58.022zm-18 50.215l-53.71 17.89l162.63 54.175l22.417-7.467l-125.18-41.7a9 9 0 0 1-6.156-8.536zm-73.19 30.375v58.088l122.286 40.733v-30.71a9 9 0 0 1 .018-.357l.01-.192a9 9 0 0 1 .07-.697l.03-.205a9 9 0 0 1 .134-.66l.06-.236a9 9 0 0 1 .19-.616l.092-.248a9 9 0 0 1 .238-.567a9 9 0 0 1 .135-.282a9 9 0 0 1 .265-.488a9 9 0 0 1 .197-.32a9 9 0 0 1 .28-.41a9 9 0 0 1 .26-.342a9 9 0 0 1 .288-.344a9 9 0 0 1 .318-.342a9 9 0 0 1 .3-.29a9 9 0 0 1 .374-.33a9 9 0 0 1 .3-.237a9 9 0 0 1 .438-.315a9 9 0 0 1 .286-.182a9 9 0 0 1 .502-.29a9 9 0 0 1 .26-.133a9 9 0 0 1 .59-.262l.21-.082a9 9 0 0 1 .317-.122l25.18-8.387zm364.847 27.352l-87.63 29.19l-.247.07a9 9 0 0 1-.355.1a9 9 0 0 1-.443.1a9 9 0 0 1-.47.085a9 9 0 0 1-.4.05a9 9 0 0 1-.49.038a9 9 0 0 1-.423.007a9 9 0 0 1-.48-.01a9 9 0 0 1-.397-.03a9 9 0 0 1-.504-.06a9 9 0 0 1-.38-.07a9 9 0 0 1-.52-.117a9 9 0 0 1-.31-.087a9 9 0 0 1-.268-.077l-38.526-12.834l-73.23 24.395l63.368 21.11l163.707-54.532zm-224.56 53.242v58.085l73.85 24.602v-36.225l.005.002V304.63l-2.752-.915l-.014.004l-71.09-23.68zm-85.174 14.82L58.57 313.68l63.373 21.11l56.485-18.817l-63.37-21.11zM39.095 326.17v58.088l73.85 24.6V350.77zm390.207 9.816l-63.375 21.112l36.283 12.086l63.374-21.112l-36.28-12.086zM219.03 363.36v21.86l174.183 58.022v-58.088L337.45 366.58l-51.516 17.162l-.19.053a9 9 0 0 1-.467.133a9 9 0 0 1-.332.074a9 9 0 0 1-.588.107l-.253.03a9 9 0 0 1-.674.053l-.196.004a9 9 0 0 1-.693-.013l-.206-.016a9 9 0 0 1-.723-.09l-.122-.02a9 9 0 0 1-.795-.18l-.025-.007a9 9 0 0 1-.432-.122l-61.207-20.39z"/></svg>}
            {id === 7 && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="m256 22.017l-69.427 102.007l-123.038-9.32L100 232.584l-84 90.384l114.898 44.987l18.292 122.028L256 428.2l106.81 61.783l18.292-122.028L496 322.968l-84-90.385l36.465-117.88l-123.038 9.32z"/></svg>}
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <span className="text-xl font-bold text-center">{title}</span>
              <span className="text-xs font-light text-center">(Survolez moi)</span>
            </div>
          </div>
        </div>
        <div className="front">
          
          <div className="img">
            <div className="circle" />
            <div className="circle" id="right" />
            <div className="circle" id="bottom" />
          </div>

          <div className="front-content">
            <small className="badge">{badge}</small>
            <div className="description">
              <div className="title">
                <p className="text-lg font-bold">
                  {title}
                </p>
              </div>
              <p className="lg:text-[13px] leading-1.5 mt-[5px] text-gray-300 text-pretty">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card