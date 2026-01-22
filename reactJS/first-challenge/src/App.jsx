import { VirtualList } from "./VirtualList";

function App() {
 const bigList = Array.from({ length: 100000 }, (_, i) => `Item #${i + 1}`);

  return <div style={{ padding: '20px' }}>
      <h1>Virtual Scroll Demo</h1>
      
      <VirtualList 
        items={bigList} 
        height={400} 
        itemHeight={35} 
        renderItem={(item) => (
          <div style={{ 
            height: '35px', 
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px'
          }}>
            {item}
          </div>
        )}
      />
    </div>
}

export default App
