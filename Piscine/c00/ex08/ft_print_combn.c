/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_combn.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/15 14:43:38 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/15 17:14:47 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	recursive_combn(int i, char depth, char *arr, int nb)
{
	if (i > nb)
		return ;
	if (i == nb)
	{
		write(1, arr, nb);
		if (arr[0] - '0' + nb != 10)
			write(1, ", ", 2);
		else
			return ;
	}
	else
	{
		while (depth <= '9')
		{
			arr[i] = depth;
			recursive_combn(i + 1, depth + 1, arr, nb);
			depth++;
		}
	}
}

void	ft_print_combn(int nb)
{
	char	arr[10];

	if (nb < 1 || nb > 9)
		return ;
	recursive_combn(0, '0', arr, nb);
}
