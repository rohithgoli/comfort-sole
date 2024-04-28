import { arrowRight } from "../assets/icons"
import { specialOffer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={specialOffer} 
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the lofties expectations.
          Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <div>
            <Button label="Shop now" iconURL={arrowRight} />
          </div>
          <div>
            <Button 
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers