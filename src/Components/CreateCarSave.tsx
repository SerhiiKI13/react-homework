import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICars.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidators} from "../validator/carValidators.ts";
import {serviceApiCars} from "../service/service.api.get.ts";

export const CreateCarSave = () => {
    const {handleSubmit,register,formState: {errors,isValid}} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidators)});
    const customHandler = (event: ICar) => {
        serviceApiCars.saveCar(event).then(value => console.log(value));
    }
    return (
        // <form onSubmit={handleSubmit(customHandler)}>
        //
        //     <input type={'number'} {...register('year')}  placeholder={'year'} />
        //     {errors && <div>{errors.year?.message}</div>}
        //     <input type={'number'} {...register('price')}  placeholder={'price'} />
        //     {errors && <div>{errors.price?.message}</div>}
        //     <button disabled={!isValid}>create</button>
        // </form>
        //
        <div className="login-box">
                <p>Create Car</p>
                <form onSubmit={handleSubmit(customHandler)}>
                  <div className="user-box">
                    <input type={'text'} {...register('brand')}  placeholder={'brand'} />
                    {errors && <div className={'box-error'}>{errors.brand?.message}</div>}
                      <label>Brand</label>
                  </div>
                  <div className="user-box">
                     <input type={'number'} {...register('year')}  placeholder={'year'} />
                    {errors && <div className={'box-error'}>{errors.year?.message}</div>}
                      <label>Year</label>
                  </div>
                        <div className="user-box">
         <input type={'number'} {...register('price')}  placeholder={'price'} />
                    {errors && <div className={'box-error'}>{errors.price?.message}</div>}
                            <label>Price</label>
        </div>
                  <button disabled={!isValid}>
                    <span />
                    <span />
                    <span />
                    <span />
                   Create
                  </button>
                </form>

              </div>
    );
};