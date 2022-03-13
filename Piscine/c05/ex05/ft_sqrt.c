/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_sqrt.c                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/25 16:21:08 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/26 17:07:48 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	recursive_sqrt(int nb, int i)
{
	if (nb > 2147395600)
		return (0);
	if (i * i == nb)
		return (i);
	if (i * i < nb)
		return (recursive_sqrt(nb, i + 1));
	return (0);
}

int	ft_sqrt(int nb)
{
	return (recursive_sqrt(nb, 0));
}
