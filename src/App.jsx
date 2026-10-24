import './App.css'

const products = [
  { id: 1, name: 'Notebook', description: 'A simple ruled notebook.', price: 4.99 },
  { id: 2, name: 'Pen Set', description: 'A set of smooth-writing pens.', price: 2.49 },
  { id: 3, name: 'Desk Planner', description: 'Plan your week at a glance.', price: 7.99 },
]

function ProductCard({ product }) {
  return (
    <li className="product-card rounded border border-gray-200 bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
      <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      <p className="mt-4 font-medium text-gray-900">${product.price.toFixed(2)}</p>
    </li>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold">Product List</h1>
        <p className="mb-6 text-gray-600">A few items from our store.</p>
        <ul className="product-list grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
